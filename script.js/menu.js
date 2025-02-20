const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

function openCloseMenu() {
  menu.classList.toggle('show');
  menu.classList.toggle('hide');

  menu.inert = menu.inert ? false : true;
}

hamburger.addEventListener('click', openCloseMenu);

hamburger.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    openCloseMenu();
  }
});