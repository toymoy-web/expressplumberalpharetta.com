document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var closeBtn = document.getElementById('mmClose');

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  }
  if (hamburger) { hamburger.addEventListener('click', openMenu); }
  if (closeBtn) { closeBtn.addEventListener('click', closeMenu); }

  var faqItems = document.querySelectorAll('.faq-list [data-faq]');
  faqItems.forEach(function (item) {
    var q = item.querySelector('b');
    var a = item.querySelector('p');
    if (!q || !a) { return; }
    q.style.cursor = 'pointer';
  });
});
