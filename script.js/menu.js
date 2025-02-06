const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu-link')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  menu.classList.toggle('hide');

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
});

hamburger.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    menu.classList.toggle('show');
    menu.classList.toggle('hide');
    
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
});

// Optional: Close the menu if clicked outside
window.addEventListener('click', (e) => {
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
});
