document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    if (!menuButton || !navigation) return;

    function toggleMenu() {
        const isOpen = navigation.classList.toggle('show');
        menuButton.classList.toggle('open', isOpen);
        menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // close menu when a nav link is clicked (mobile)
    navigation.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navigation.classList.remove('show');
            menuButton.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
});



