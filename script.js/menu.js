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

// Optional: Close the menu if clicked outside
//This is probably an unnecessary bit of code. The menu button should have
//a transition that turns the hamburger into an 'x' so closing the menu will
//be more intuitive. The code below makes it too easy to accidentally make the menu
//unusable.

/* window.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
    menu.classList.add('hide');

    if (menu.getAttribute('aria-hidden') == 'true') {
      menu.setAttribute('aria-hidden', 'false');
      links.forEach(element => {
        element.setAttribute('tabindex', '0');
      });
    } else if (menu.getAttribute('aria-hidden') == 'false') {
      menu.setAttribute('aria-hidden', 'true');
      links.forEach(element => {
        element.setAttribute('tabindex', '-1');
      });
    }
  }
}); */
