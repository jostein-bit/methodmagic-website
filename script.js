// Subtle scroll-fade for sections + cards.
(function () {
  var targets = document.querySelectorAll('.section, .card, .hero__bullets, .footer');
  targets.forEach(function (el) { el.classList.add('fade-in'); });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  targets.forEach(function (el) { io.observe(el); });
})();
