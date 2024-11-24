<nav>
  <ul class="menu">
    <!-- Main Menu Item -->
    <li>
      <a 
        href="#home" 
        tabindex="0">Home</a>
    </li>

    <!-- Main Menu Item with Submenu -->
    <li>
      <a 
        href="#services" 
        aria-haspopup="true" 
        aria-expanded="false" 
        tabindex="0">Services</a>
      <ul class="submenu" hidden>
        <li>
          <a href="#web-design" tabindex="0">Web Design</a>
        </li>
        <li>
          <a href="#seo" tabindex="0">SEO</a>
        </li>
        <li>
          <a href="#marketing" tabindex="0">Marketing</a>
        </li>
      </ul>
    </li>

    <!-- Another Main Menu Item -->
    <li>
      <a 
        href="#contact" 
        tabindex="0">Contact</a>
    </li>
  </ul>
</nav>


.menu > li {
  position: relative;
}

.submenu {
  display: none; /* Hide submenu by default */
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
}

.menu > li > a:focus + .submenu,
.menu > li > a:hover + .submenu {
  display: block; /* Show submenu on focus or hover */
}

a {
  text-decoration: none;
  padding: 10px 15px;
  display: block;
}

a:focus {
  outline: 2px solid blue; /* Visual focus indicator */
}

.submenu a:focus {
  background-color: lightgray; /* Highlight focused submenu items */
}


<nav>
  <ul class="menu" role="menu">
    <!-- Main Menu Item -->
    <li role="none">
      <a href="#home" role="menuitem" tabindex="0">Home</a>
    </li>

    <!-- Main Menu Item with Submenu -->
    <li role="none">
      <a 
        href="#services" 
        role="menuitem" 
        aria-haspopup="true" 
        aria-expanded="false" 
        tabindex="0"
        id="services-button">Services</a>
      <ul class="submenu" role="menu" hidden aria-labelledby="services-button">
        <li role="none">
          <a href="#web-design" role="menuitem" tabindex="0">Web Design</a>
        </li>
        <li role="none">
          <a href="#seo" role="menuitem" tabindex="0">SEO</a>
        </li>
        <li role="none">
          <a href="#marketing" role="menuitem" tabindex="0">Marketing</a>
        </li>
      </ul>
    </li>

    <!-- Another Main Menu Item -->
    <li role="none">
      <a href="#contact" role="menuitem" tabindex="0">Contact</a>
    </li>
  </ul>
</nav>



document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu > li > a');
  
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const submenu = item.nextElementSibling;

      // Toggle submenu if it exists
      if (submenu) {
        event.preventDefault();
        const isExpanded = item.getAttribute('aria-expanded') === 'true';
        item.setAttribute('aria-expanded', !isExpanded);
        submenu.hidden = isExpanded;
      }
    });

    item.addEventListener('keydown', (event) => {
      const submenu = item.nextElementSibling;

      switch (event.key) {
        case 'Enter':
        case ' ':
          if (submenu) {
            event.preventDefault();
            const isExpanded = item.getAttribute('aria-expanded') === 'true';
            item.setAttribute('aria-expanded', !isExpanded);
            submenu.hidden = isExpanded;
          }
          break;

        case 'ArrowDown':
          if (submenu && !submenu.hidden) {
            event.preventDefault();
            submenu.querySelector('a').focus();
          }
          break;

        case 'Escape':
          if (submenu && !submenu.hidden) {
            event.preventDefault();
            item.setAttribute('aria-expanded', 'false');
            submenu.hidden = true;
            item.focus();
          }
          break;
      }
    });
  });

  const submenuItems = document.querySelectorAll('.submenu a');

  submenuItems.forEach(subItem => {
    subItem.addEventListener('keydown', (event) => {
      const allSubmenuItems = Array.from(event.target.closest('ul').querySelectorAll('a'));
      const currentIndex = allSubmenuItems.indexOf(event.target);

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          const nextItem = allSubmenuItems[currentIndex + 1] || allSubmenuItems[0];
          nextItem.focus();
          break;

        case 'ArrowUp':
          event.preventDefault();
          const prevItem = allSubmenuItems[currentIndex - 1] || allSubmenuItems[allSubmenuItems.length - 1];
          prevItem.focus();
          break;

        case 'Escape':
          event.preventDefault();
          const parentMenu = event.target.closest('.submenu').previousElementSibling;
          parentMenu.setAttribute('aria-expanded', 'false');
          parentMenu.focus();
          break;
      }
    });
  });
});


