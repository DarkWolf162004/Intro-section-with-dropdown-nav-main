const menuToggler = document.getElementById('nav-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navMenuAuth = document.getElementById('nav-menu-auth');
const subTogglerFeatures = document.getElementById('features-toggle');
const subTogglerCompany = document.getElementById('company-toggle');
const subMenuFeatures = document.getElementById('features-menu');
const fDown = document.getElementById('f-down');
const subMenuCompany = document.getElementById('company-menu');
const cDown = document.getElementById('c-down');
const docBody = document.getElementById('page-content');

const mediaQuery = window.matchMedia('(min-width:915px)');
const mediaQueryHeight = window.matchMedia('(max-height:950px)');

function toggleShowMenu() {
  navMenu.classList.toggle('show-menu');
  navMenuAuth.classList.toggle('show-menu');
  menuToggler.classList.toggle('show-menu');
}

menuToggler.addEventListener('click', () => {
  toggleShowMenu();
});

subTogglerFeatures.addEventListener('click', () => {
  subMenuFeatures.classList.toggle('show-sub');
  fDown.classList.toggle('show-up');
});

subTogglerCompany.addEventListener('click', () => {
  subMenuCompany.classList.toggle('show-sub');
  cDown.classList.toggle('show-up');
});

mediaQuery.addEventListener('change', (e) => {
  if (navMenu.classList.contains('show-menu')) {
    toggleShowMenu();
  }
});

mediaQueryHeight.addEventListener('change', (e) => {
  if (window.getComputedStyle(document.body).overflowY === 'hidden') {
    docBody.style.overflowY = 'visible';
  } else {
    window.scrollTo(0, 0);
    docBody.style.overflowY = 'hidden';
  }
});
