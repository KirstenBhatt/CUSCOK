const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

function openCloseMenu() {
  menu.classList.toggle('show');
  menu.classList.toggle('hide');

  menu.inert = menu.inert ? false : true;
  
  if (hamburger.ariaExpanded == 'false') {
    hamburger.ariaExpanded = 'true';
  } else {
    hamburger.ariaExpanded = 'false';
  }
}

hamburger.addEventListener('click', openCloseMenu);

hamburger.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    openCloseMenu();
  }
});