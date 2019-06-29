// SELECT DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// set Initial State of Menu
let showMenu = false;

const  toggleMenu = () => {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  };
};
menuBtn.addEventListener('click', toggleMenu);


// Dark mode toggle
const checkbox = document.querySelector('input[name=theme]');

const toggleChange = () => {
  if(checkbox.checked) {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
}

checkbox.addEventListener('change', toggleChange);
