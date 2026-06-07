import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const originDir = path.join(root, "origin");
const docsDir = path.join(root, "docs");
const exportDir = path.join(root, "exports");
const contentDir = path.join(exportDir, "synox-content");
const assetsDir = path.join(exportDir, "assets-candidates");
const synoxAssetsOut = path.join(assetsDir, "synox-template");
const towAssetsOut = path.join(assetsDir, "trading-on-wheels-current");

const ignoredTextTags = new Set(["script", "style", "noscript", "svg"]);
const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const synoxCandidateFolders = [
  "about",
  "avatar",
  "backgrounds",
  "blogs",
  "clients",
  "features",
  "flags",
  "hero",
  "icons",
  "integrated",
  "policy",
  "projects",
  "services",
  "shapes",
  "site_logo",
  "team",
];

const synoxRootCandidateFiles = [
  "404_error_image.webp",
  "app_store.webp",
  "google_play.webp",
  "synox_page_thumbnail.webp",
];

function normalizeSlashes(value) {
  return value.replace(/\\/g, "/");
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function toCsv(rows, headers) {
  return [
    headers.map(csvCell).join(","),
    ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(",")),
  ].join("\n");
}

function decodeEntities(value) {
  const named = {
    amp: "&",
    apos: "'",
    copy: "(c)",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
    reg: "(r)",
    trade: "(tm)",
  };

  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);/g, (_, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1]?.toLowerCase() === "x";
      const code = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      if (Number.isFinite(code)) {
        return String.fromCodePoint(code);
      }
    }
    return named[entity] ?? `&${entity};`;
  });
}

function normalizeText(value) {
  return decodeEntities(value)
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function unique(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    const key = value.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(value);
    }
  }
  return out;
}

function classList(node) {
  return (node.attrs?.class ?? "")
    .split(/\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function nodeLabel(node) {
  const classes = classList(node);
  const classText = classes.length ? `.${classes.slice(0, 4).join(".")}` : "";
  const idText = node.attrs?.id ? `#${node.attrs.id}` : "";
  return `${node.tag}${idText}${classText}`;
}

function parseAttrs(rawTag) {
  const attrs = {};
  const tagBody = rawTag
    .replace(/^<\s*\/?\s*[\w:-]+/, "")
    .replace(/\/?\s*>$/, "");
  const attrPattern = /([^\s=\/<>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = attrPattern.exec(tagBody))) {
    const name = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    attrs[name] = decodeEntities(value);
  }
  return attrs;
}

function parseHtml(html) {
  const rootNode = {
    tag: "#document",
    attrs: {},
    children: [],
    parent: null,
    start: 0,
    end: html.length,
  };
  const stack = [rootNode];
  const tokenPattern = /<!--[\s\S]*?-->|<!doctype[\s\S]*?>|<\/?[^>]+>|[^<]+/gi;
  let match;

  while ((match = tokenPattern.exec(html))) {
    const token = match[0];
    const current = stack[stack.length - 1];

    if (token.startsWith("<!--") || /^<!doctype/i.test(token)) {
      continue;
    }

    if (token.startsWith("</")) {
      const closeMatch = token.match(/^<\/\s*([\w:-]+)/);
      if (!closeMatch) {
        continue;
      }
      const closeTag = closeMatch[1].toLowerCase();
      for (let i = stack.length - 1; i > 0; i -= 1) {
        const node = stack[i];
        node.end = match.index + token.length;
        stack.pop();
        if (node.tag === closeTag) {
          break;
        }
      }
      continue;
    }

    if (token.startsWith("<")) {
      const openMatch = token.match(/^<\s*([\w:-]+)/);
      if (!openMatch) {
        continue;
      }
      const tag = openMatch[1].toLowerCase();
      const selfClosing = /\/\s*>$/.test(token) || voidTags.has(tag);
      const node = {
        tag,
        attrs: parseAttrs(token),
        children: [],
        parent: current,
        start: match.index,
        end: selfClosing ? match.index + token.length : null,
      };
      current.children.push(node);
      if (!selfClosing) {
        stack.push(node);
      }
      continue;
    }

    if (!ignoredTextTags.has(current.tag)) {
      const text = normalizeText(token);
      if (text) {
        current.children.push({
          tag: "#text",
          text,
          attrs: {},
          children: [],
          parent: current,
          start: match.index,
          end: match.index + token.length,
        });
      }
    }
  }

  return rootNode;
}

function lineIndexes(html) {
  const starts = [0];
  for (let i = 0; i < html.length; i += 1) {
    if (html[i] === "\n") {
      starts.push(i + 1);
    }
  }
  return starts;
}

function lineFromIndex(starts, index) {
  let low = 0;
  let high = starts.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (starts[mid] <= index) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high + 1;
}

function walk(node, visit, ancestors = []) {
  visit(node, ancestors);
  for (const child of node.children ?? []) {
    walk(child, visit, [...ancestors, node]);
  }
}

function first(node, predicate) {
  let found = null;
  walk(node, (child) => {
    if (!found && predicate(child)) {
      found = child;
    }
  });
  return found;
}

function textNodes(node) {
  const texts = [];
  walk(node, (child, ancestors) => {
    if (child.tag !== "#text") {
      return;
    }
    if (ancestors.some((ancestor) => ignoredTextTags.has(ancestor.tag))) {
      return;
    }
    const text = normalizeText(child.text);
    if (!text || /^[+\-*/|()[\]{}:;,.]+$/.test(text)) {
      return;
    }
    texts.push(text);
  });
  return texts;
}

function textOf(node) {
  return normalizeText(textNodes(node).join(" "));
}

function textsByTag(node, tags) {
  const out = [];
  const tagSet = new Set(tags);
  walk(node, (child) => {
    if (!tagSet.has(child.tag)) {
      return;
    }
    const text = textOf(child);
    if (text) {
      out.push({ tag: child.tag, text });
    }
  });
  return out;
}

function extractImageValues(value) {
  const out = [];
  if (!value) {
    return out;
  }
  const imagePattern = /(?:url\(["']?)?([^"')\s,]+?\.(?:png|jpe?g|webp|gif|svg|mp4))(?:["']?\))?/gi;
  let match;
  while ((match = imagePattern.exec(value))) {
    out.push(match[1]);
  }
  return out;
}

function imagesInNode(node) {
  const images = [];
  walk(node, (child) => {
    if (child.tag === "#text") {
      return;
    }
    for (const [name, value] of Object.entries(child.attrs ?? {})) {
      if (name === "srcset") {
        for (const candidate of value.split(",")) {
          const src = candidate.trim().split(/\s+/)[0];
          images.push(...extractImageValues(src));
        }
      } else if (
        ["src", "href", "data-background", "data-bg", "style", "poster"].includes(name) ||
        /\.(png|jpe?g|webp|gif|svg|mp4)/i.test(value)
      ) {
        images.push(...extractImageValues(value));
      }
    }
  });
  return unique(images.map(normalizeSlashes));
}

function linksAndButtons(node) {
  const controls = [];
  walk(node, (child) => {
    if (!["a", "button"].includes(child.tag)) {
      return;
    }
    const text = textOf(child);
    if (text) {
      controls.push({
        tag: child.tag,
        text,
        href: child.attrs?.href ?? "",
      });
    }
  });
  return controls;
}

function isCandidateNode(node) {
  if (!node || node.tag === "#text") {
    return false;
  }
  if (["header", "footer", "section"].includes(node.tag)) {
    return true;
  }
  const classes = classList(node);
  if (node.tag === "div" && classes.includes("container-fluid")) {
    return Boolean(first(node, (child) => child.tag === "h1"));
  }
  if (classes.some((item) => /(^|_)section$/.test(item))) {
    return Boolean(first(node, (child) => /^h[1-6]$/.test(child.tag)));
  }
  return false;
}

function candidateSections(body) {
  const candidates = [];
  walk(body, (node, ancestors) => {
    if (!isCandidateNode(node)) {
      return;
    }
    const hasCandidateAncestor = ancestors.some((ancestor) => isCandidateNode(ancestor));
    if (!hasCandidateAncestor) {
      candidates.push(node);
    }
  });
  return candidates;
}

function pageTitle(documentNode) {
  const title = first(documentNode, (node) => node.tag === "title");
  return title ? textOf(title) : "";
}

function bodyClass(documentNode) {
  const body = first(documentNode, (node) => node.tag === "body");
  return body?.attrs?.class ?? "";
}

function imageKey(src) {
  return normalizeSlashes(src)
    .replace(/^(\.\/)?/, "")
    .replace(/^origin\//, "")
    .replace(/^assets\/images\//, "");
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyFileWithManifest(source, target, manifest, category) {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(source, target);
  const stat = await fs.stat(source);
  manifest.push({
    category,
    source: normalizeSlashes(path.relative(root, source)),
    exportPath: normalizeSlashes(path.relative(root, target)),
    bytes: stat.size,
    ext: path.extname(source).toLowerCase(),
  });
}

async function copyTree(sourceDir, targetDir, manifest, category) {
  if (!(await fileExists(sourceDir))) {
    return;
  }
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const source = path.join(sourceDir, entry.name);
    const target = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      await copyTree(source, target, manifest, category);
    } else if (entry.isFile()) {
      await copyFileWithManifest(source, target, manifest, category);
    }
  }
}

function renderPageMarkdown(page) {
  const lines = [];
  lines.push(`## ${page.file}`);
  lines.push("");
  lines.push(`- Title: ${page.title || "sin title"}`);
  lines.push(`- Body class: ${page.bodyClass || "sin clase"}`);
  lines.push(`- Sections detected: ${page.sections.length}`);
  lines.push("");

  for (const section of page.sections) {
    lines.push(`### ${section.order}. ${section.label}`);
    lines.push("");
    lines.push(`- Source: \`origin/${page.file}:${section.line}\``);
    if (section.images.length) {
      lines.push(`- Images/media: ${section.images.map((item) => `\`${item}\``).join(", ")}`);
    }
    if (section.headings.length) {
      lines.push("- Headings:");
      for (const heading of section.headings) {
        lines.push(`  - ${heading.tag}: ${heading.text}`);
      }
    }
    if (section.controls.length) {
      lines.push("- Links/buttons:");
      for (const control of section.controls) {
        const href = control.href ? ` -> ${control.href}` : "";
        lines.push(`  - ${control.text}${href}`);
      }
    }
    lines.push("- Text:");
    const textLines = section.textNodes.length ? section.textNodes : ["sin texto visible"];
    for (const text of textLines) {
      lines.push(`  - ${text}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function renderAssetsManifest(title, manifest) {
  const byCategory = new Map();
  for (const item of manifest) {
    if (!byCategory.has(item.category)) {
      byCategory.set(item.category, []);
    }
    byCategory.get(item.category).push(item);
  }

  const lines = [];
  lines.push(`# ${title}`);
  lines.push("");
  lines.push("Este manifest fue generado automaticamente para mover assets entre proyectos sin revisar todo el template desde cero.");
  lines.push("");
  lines.push(`Total assets: ${manifest.length}`);
  lines.push("");
  for (const [category, items] of [...byCategory.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`## ${category}`);
    lines.push("");
    for (const item of items.sort((a, b) => a.exportPath.localeCompare(b.exportPath))) {
      lines.push(`- \`${item.exportPath}\` (${item.bytes} bytes)`);
      lines.push(`  Source: \`${item.source}\``);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function renderExportIndex(pages, synoxManifest, towManifest) {
  return `# Synox Export Index

## Proposito

Este export junta la informacion original de Synox/XpressBuddy en un formato rapido de consultar para futuros proyectos. La idea es que el proximo agente primero lea arquitectura, inventario y exports antes de abrir HTML largos.

## Archivos Generados

- \`exports/synox-content/synox-original-content-export.md\`: texto visible por pagina y seccion.
- \`exports/synox-content/synox-original-content.json\`: la misma informacion en formato estructurado.
- \`exports/synox-content/synox-section-index.csv\`: indice rapido de paginas, clases, headings e imagenes.
- \`exports/synox-content/synox-image-usage.csv\`: donde aparece cada imagen/media del HTML original.
- \`exports/synox-content/synox-text-only.txt\`: texto visible continuo por pagina/seccion.
- \`exports/assets-candidates/synox-template/\`: imagenes candidatas del template original.
- \`exports/assets-candidates/trading-on-wheels-current/\`: assets TOW actuales ya separados del template.

## Cobertura

- Paginas Synox procesadas: ${pages.length}.
- Secciones detectadas: ${pages.reduce((sum, page) => sum + page.sections.length, 0)}.
- Assets Synox candidatos copiados: ${synoxManifest.length}.
- Assets TOW actuales copiados: ${towManifest.length}.

## Lectura Recomendada

1. Leer \`docs/architecture.md\`.
2. Leer \`docs/html-section-inventory.md\`.
3. Leer \`exports/synox-content/synox-original-content-export.md\` para copy y textos originales.
4. Revisar \`exports/assets-candidates/*/manifest.md\` antes de elegir imagenes.
5. Registrar decisiones nuevas en \`docs/decisions.md\`.
`;
}

function renderFutureProjectIntake() {
  return `# Future Project Intake

## Objetivo

Primera accion para proyectos nuevos basados en templates HTML: analizar arquitectura y secciones antes de tocar SCSS. Esto reduce tokens, evita rehacer inventarios y permite decidir que secciones del HTML se pueden reutilizar.

## Primera Pasada Obligatoria

1. Revisar si existe \`docs/README.md\`, \`docs/architecture.md\`, \`docs/html-section-inventory.md\`, \`docs/assets-plan.md\`, \`docs/current-phase.md\` y \`docs/decisions.md\`.
2. Si esos docs existen, leerlos primero y solo abrir HTML puntuales cuando falte una seccion.
3. Si no existen, generar primero:
   - Arquitectura real del proyecto.
   - Inventario de paginas y secciones.
   - Mapa de assets candidatos.
   - Estado actual y decisiones.
4. Revisar carpetas \`origin/\`, \`assets/\`, \`external-assets/\` y cualquier carpeta equivalente de descarga original.
5. Separar assets originales del template y assets de marca/proyecto.
6. En primera pasada no estabilizar todo el SCSS. Solo identificar propietarios de secciones y clases que ya existen.
7. Elegir secciones por funcion: hero, about, services/features, pricing/offers, process, testimonials, FAQ, contact, footer.
8. Registrar que HTML se puede reutilizar y que SCSS propietario controla cada bloque.

## Criterio Para Usar Secciones Del Template

- Reutilizar una seccion si su estructura ya resuelve el contenido aunque el copy cambie.
- Mover HTML con sus clases existentes antes de crear clases nuevas.
- Buscar el parcial SCSS propietario antes de editar estilos.
- No crear una capa paralela de overrides si el parcial original puede absorber el cambio.
- No limpiar responsive completo en la primera pasada salvo que bloquee la visualizacion.

## Entregables Minimos Para Los Proximos Dos Proyectos

- \`docs/architecture.md\`: stack, entrypoints, SCSS/CSS, JS y assets.
- \`docs/html-section-inventory.md\`: paginas, secciones, proposito y posible uso.
- \`exports/<template>-content/\`: texto por pagina/seccion en Markdown, JSON y CSV.
- \`exports/assets-candidates/\`: carpeta con imagenes candidatas y manifest.
- \`docs/current-phase.md\`: que ya esta decidido y que queda pendiente.

## Checklist Rapido

- [ ] Lei docs existentes antes de inspeccionar HTML largo.
- [ ] Identifique carpeta \`origin\` o fuente original.
- [ ] Separe texto original de copy adaptado.
- [ ] Liste secciones reutilizables.
- [ ] Liste assets candidatos.
- [ ] No toque SCSS salvo correccion puntual necesaria.
- [ ] Registre decisiones para el siguiente agente.
`;
}

async function main() {
  await fs.mkdir(contentDir, { recursive: true });
  await fs.mkdir(synoxAssetsOut, { recursive: true });
  await fs.mkdir(towAssetsOut, { recursive: true });

  const htmlFiles = (await fs.readdir(originDir))
    .filter((file) => file.endsWith(".html"))
    .sort((a, b) => a.localeCompare(b));

  const pages = [];
  const sectionRows = [];
  const imageRows = [];
  const imageUsage = new Map();

  for (const file of htmlFiles) {
    const fullPath = path.join(originDir, file);
    const html = await fs.readFile(fullPath, "utf8");
    const lines = lineIndexes(html);
    const documentNode = parseHtml(html);
    const body = first(documentNode, (node) => node.tag === "body") ?? documentNode;
    const sections = candidateSections(body).map((node, index) => {
      const headings = textsByTag(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);
      const controls = linksAndButtons(node);
      const images = imagesInNode(node);
      const text = textNodes(node);
      const section = {
        order: index + 1,
        tag: node.tag,
        label: nodeLabel(node),
        id: node.attrs?.id ?? "",
        classes: classList(node),
        line: lineFromIndex(lines, node.start),
        headings,
        controls,
        images,
        textNodes: text,
        fullText: normalizeText(text.join(" ")),
      };

      sectionRows.push({
        page: file,
        order: section.order,
        line: section.line,
        tag: section.tag,
        label: section.label,
        classes: section.classes.join(" "),
        headings: section.headings.map((item) => `${item.tag}: ${item.text}`).join(" | "),
        text_count: section.textNodes.length,
        images: section.images.join(" | "),
      });

      for (const image of images) {
        const key = imageKey(image);
        const usage = {
          page: file,
          section_order: section.order,
          section_label: section.label,
          image,
        };
        imageRows.push(usage);
        if (!imageUsage.has(key)) {
          imageUsage.set(key, []);
        }
        imageUsage.get(key).push(usage);
      }

      return section;
    });

    pages.push({
      file,
      title: pageTitle(documentNode),
      bodyClass: bodyClass(documentNode),
      sections,
    });
  }

  const exportJson = {
    generatedAt: new Date().toISOString(),
    source: "origin/*.html",
    pages,
  };
  await fs.writeFile(
    path.join(contentDir, "synox-original-content.json"),
    JSON.stringify(exportJson, null, 2),
    "utf8",
  );

  const md = [
    "# Synox Original Content Export",
    "",
    "Texto visible extraido desde `origin/*.html`, agrupado por pagina y seccion. El texto esta normalizado para lectura y el JSON conserva la misma estructura para busquedas o automatizacion.",
    "",
    `Paginas procesadas: ${pages.length}`,
    `Secciones detectadas: ${sectionRows.length}`,
    "",
    ...pages.map(renderPageMarkdown),
  ].join("\n");
  await fs.writeFile(path.join(contentDir, "synox-original-content-export.md"), md, "utf8");

  const textOnly = pages
    .flatMap((page) => [
      `# ${page.file}`,
      "",
      ...page.sections.flatMap((section) => [
        `## ${section.order}. ${section.label}`,
        ...section.textNodes,
        "",
      ]),
    ])
    .join("\n");
  await fs.writeFile(path.join(contentDir, "synox-text-only.txt"), textOnly, "utf8");

  await fs.writeFile(
    path.join(contentDir, "synox-section-index.csv"),
    toCsv(sectionRows, ["page", "order", "line", "tag", "label", "classes", "headings", "text_count", "images"]),
    "utf8",
  );

  await fs.writeFile(
    path.join(contentDir, "synox-image-usage.csv"),
    toCsv(imageRows, ["page", "section_order", "section_label", "image"]),
    "utf8",
  );

  const synoxManifest = [];
  const originImages = path.join(originDir, "assets", "images");
  for (const folder of synoxCandidateFolders) {
    await copyTree(
      path.join(originImages, folder),
      path.join(synoxAssetsOut, folder),
      synoxManifest,
      `synox/${folder}`,
    );
  }
  for (const file of synoxRootCandidateFiles) {
    const source = path.join(originImages, file);
    if (await fileExists(source)) {
      await copyFileWithManifest(source, path.join(synoxAssetsOut, file), synoxManifest, "synox/root");
    }
  }

  const towManifest = [];
  await copyTree(
    path.join(root, "assets", "images", "tow"),
    path.join(towAssetsOut, "tow"),
    towManifest,
    "tow/current",
  );

  await fs.writeFile(
    path.join(synoxAssetsOut, "manifest.json"),
    JSON.stringify(
      synoxManifest.map((item) => {
        const relative = item.source.replace(/^origin\/assets\/images\//, "");
        return {
          ...item,
          usedInOriginalHtml: imageUsage.get(relative) ?? [],
        };
      }),
      null,
      2,
    ),
    "utf8",
  );
  await fs.writeFile(
    path.join(synoxAssetsOut, "manifest.md"),
    renderAssetsManifest("Synox Template Asset Candidates", synoxManifest),
    "utf8",
  );

  await fs.writeFile(path.join(towAssetsOut, "manifest.json"), JSON.stringify(towManifest, null, 2), "utf8");
  await fs.writeFile(
    path.join(towAssetsOut, "manifest.md"),
    renderAssetsManifest("Trading On Wheels Current Assets", towManifest),
    "utf8",
  );

  await fs.writeFile(
    path.join(docsDir, "synox-export-index.md"),
    renderExportIndex(pages, synoxManifest, towManifest),
    "utf8",
  );
  await fs.writeFile(path.join(docsDir, "future-project-intake.md"), renderFutureProjectIntake(), "utf8");

  console.log(`Processed ${pages.length} pages and ${sectionRows.length} sections.`);
  console.log(`Copied ${synoxManifest.length} Synox candidate assets.`);
  console.log(`Copied ${towManifest.length} current TOW assets.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
