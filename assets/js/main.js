// ============================================================
// Swiss Modernism — Language Switch & Mobile Navigation
// ============================================================

(function () {
  'use strict';

  // --- Language Management ---
  const LANG_KEY = 'swiss-lang';
  const LANG_EN = 'en';
  const LANG_ZH = 'zh';

  // Detect default language
  function detectLanguage() {
    // Check localStorage first
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === LANG_EN || stored === LANG_ZH) return stored;

    // Fall back to browser language
    const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (navLang.startsWith('zh')) return LANG_ZH;
    return LANG_EN;
  }

  let currentLang = detectLanguage();

  // Apply language to all elements with data-lang-en/data-lang-zh
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    // Update all data-lang elements
    document.querySelectorAll('[data-lang-en][data-lang-zh]').forEach(function (el) {
      var text = el.getAttribute('data-lang-' + lang);
      if (text !== null) {
        el.innerHTML = text;
      }
    });

    // Update lang toggle button text
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === LANG_ZH ? 'EN' : '中';
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  // Toggle language
  function toggleLanguage() {
    applyLanguage(currentLang === LANG_EN ? LANG_ZH : LANG_EN);
  }

  // Bind language toggle
  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  // --- Mobile Navigation ---
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when clicking a link
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Apply detected language on load
  applyLanguage(currentLang);

  // --- Research Detail Panel Toggle ---
  document.querySelectorAll('.swiss-detail-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = this.getAttribute('data-target');
      var panel = document.getElementById(targetId);
      var isOpen = this.classList.toggle('is-open');

      if (panel) {
        if (isOpen) {
          panel.classList.add('is-open');
          this.querySelector('.swiss-detail-toggle__text').textContent =
            (currentLang === LANG_ZH) ? '收起详情' : 'Collapse';
        } else {
          panel.classList.remove('is-open');
          this.querySelector('.swiss-detail-toggle__text').textContent =
            (currentLang === LANG_ZH) ? '查看详情' : 'View Details';
        }
      }
    });
  });

  // Update detail toggle text on language switch
  var origApplyLang = applyLanguage;
  applyLanguage = function(lang) {
    origApplyLang(lang);
    document.querySelectorAll('.swiss-detail-toggle').forEach(function (btn) {
      var isOpen = btn.classList.contains('is-open');
      var textEl = btn.querySelector('.swiss-detail-toggle__text');
      if (textEl) {
        textEl.textContent = isOpen
          ? ((lang === LANG_ZH) ? '收起详情' : 'Collapse')
          : ((lang === LANG_ZH) ? '查看详情' : 'View Details');
      }
    });
  };

})();
