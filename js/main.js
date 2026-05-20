/* Cúram Education – minimal vanilla JS */

(function () {
  'use strict';

  /* --- Mobile nav toggle ----------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* --- Mark active nav link -------------------------------- */
  var links = document.querySelectorAll('.site-nav a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* --- Smooth scroll for anchor links ---------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    });
  });
})();
