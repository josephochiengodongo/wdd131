document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const menu = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (menu && navigation) {
        menu.addEventListener('click', () => {
            nav.classList.toggle('show');
            menu.classList.toggle('show');
            navigation.classList.toggle('show');
        });
    }
});




