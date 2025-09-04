// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Initialize Feather Icons
    // It's good practice to call this after the DOM is ready.
    feather.replace();

    // FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('svg');
            const isCurrentlyOpen = content.style.maxHeight !== '';

            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = '';
                    const otherIcon = item.previousElementSibling.querySelector('svg');
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });

            // Toggle the clicked accordion
            if (isCurrentlyOpen) {
                content.style.maxHeight = '';
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const menu_btn = document.getElementById("menu-btn");

    function toggleMenu() {
      let state = menu_btn.dataset.state;
      menu_btn.dataset.state =
        (!state || state === "hamburger") ? "x" : "hamburger";

      if (mobileMenu.classList.contains('menu-closed')) {
          mobileMenu.classList.remove('menu-closed');
          mobileMenu.classList.add('menu-open');
      } else {
          mobileMenu.classList.remove('menu-open');
          mobileMenu.classList.add('menu-closed');
      }
    }

    menu_btn.onclick = toggleMenu;

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu_btn.dataset.state = "hamburger";
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        });
    });
});
