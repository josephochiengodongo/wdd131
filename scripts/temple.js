document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const menuButton = document.querySelector('#menu');

    if (!nav || !menuButton) return; // nothing to do

    // initialize aria state
    menuButton.setAttribute('role', 'button');
    menuButton.setAttribute('tabindex', '0');
    menuButton.setAttribute('aria-controls', 'main-navigation');
    menuButton.setAttribute('aria-expanded', 'false');

    // give the ul an id so aria-controls points to it
    const navList = nav.querySelector('.navigation');
    if (navList && !navList.id) navList.id = 'main-navigation';

    function toggleMenu() {
        const isOpen = nav.classList.toggle('show');
        menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    menuButton.addEventListener('click', toggleMenu);

    // keyboard accessibility (Enter or Space)
    menuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            toggleMenu();
        }
    });
});

