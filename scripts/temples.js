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
createTempCard();

function createTempCard() {
    temples.forEach(temple=>{
        let card=document.createElement("section");
        let name=document.createElement("h3");
        let location=document.createElement("p");
        let dedication=document.createElement("p");
        let area =document.createElement("p");
        let img=document.createElement("img");

        name.textContent=temple.templeName;
        location.innerHTML='<span class="label">Location:</span> $(temple.location)';
        dedication.innerHTML='<span class="label">Dedicated:</span> $(temple.dedication)';
        area.innerHTML='<span clas="label">size:</span> $(temple.area) sq ft';
        img.setAttribute("src",temple.imageUrl);
        img.setAttribute("alt",'$(temple.templeName)temple');
        img.setAttribute("loading","lazy");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);


    


        
    })
}




