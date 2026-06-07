(function() {
  'use strict';

  var STORAGE_KEY = 'towSynoxTheme';
  var DEFAULT_THEME = 'dark';

  function isValidTheme(theme) {
    return theme === 'dark' || theme === 'light';
  }

  function getStoredTheme() {
    try {
      var theme = localStorage.getItem(STORAGE_KEY);
      return isValidTheme(theme) ? theme : DEFAULT_THEME;
    } catch (error) {
      return DEFAULT_THEME;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {}
  }

  function getToggle() {
    return document.querySelector('[data-tow-theme-toggle]');
  }

  function ensureToggle() {
    var toggle = getToggle();

    if (toggle) {
      return toggle;
    }

    toggle = document.createElement('button');
    toggle.className = 'tow-theme-toggle';
    toggle.type = 'button';
    toggle.setAttribute('data-tow-theme-toggle', '');

    var label = document.createElement('span');
    label.setAttribute('data-tow-theme-toggle-label', '');
    toggle.appendChild(label);

    document.body.appendChild(toggle);
    return toggle;
  }

  function setTheme(theme, shouldStore) {
    if (!isValidTheme(theme)) {
      theme = DEFAULT_THEME;
    }

    var isDark = theme === 'dark';
    var body = document.body;
    var toggle = getToggle();

    document.documentElement.setAttribute('data-tow-theme', theme);

    if (body) {
      body.classList.toggle('tow-theme-dark', isDark);
      body.classList.toggle('tow-theme-light', !isDark);
    }

    if (toggle) {
      var label = toggle.querySelector('[data-tow-theme-toggle-label]');
      toggle.setAttribute('aria-pressed', isDark ? 'false' : 'true');
      toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');

      if (label) {
        label.textContent = isDark ? 'Light' : 'Dark';
      }
    }

    if (shouldStore) {
      storeTheme(theme);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (!document.body || !document.body.classList.contains('tow-page')) {
      return;
    }

    ensureToggle().addEventListener('click', function() {
      var currentTheme = document.documentElement.getAttribute('data-tow-theme') || DEFAULT_THEME;
      setTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });

    setTheme(getStoredTheme(), false);
  });
})();
