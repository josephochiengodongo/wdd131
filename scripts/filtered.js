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
let d = new Date();
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.innerHTML = `&copy; ${d.getFullYear()}`;

const lastModifiedEl = document.querySelector('#lastModified');
if (lastModifiedEl) lastModifiedEl.textContent = `Last Modification: ${document.lastModified || ''}`;

const hambutton = document.querySelector("#hamButton");


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "London England",
        location: "London City, England",
        dedicated: "1952, September, 9",
        area: 42775,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650239-wallpaper.jpg",
    },
    {
        templeName: "Brisbane Australia",
        location: "Brisbane, Australia",
        dedicated: "2003, June, 15",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-745088-wallpaper.jpg",
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho",
        dedicated: "1984, May, 25",
        area: 35864,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg",
    },
];

const container = document.querySelector('.templecard');

if (container) {
    temples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const img = document.createElement('img');
        // use a tiny transparent placeholder and store the real URL in data-src
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        img.dataset.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.className = 'lazy';
        // also keep native lazy hint when browser supports it
        img.loading = 'lazy';

        const h2 = document.createElement('h2');
        h2.textContent = temple.templeName;

        const pLoc = document.createElement('p');
        pLoc.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const pDed = document.createElement('p');
        pDed.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const pArea = document.createElement('p');
        pArea.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(pLoc);
        card.appendChild(pDed);
        card.appendChild(pArea);

        container.appendChild(card);
    });

    // IntersectionObserver-based lazy loader (ensures images actually load when visible)
    const lazyObserverOptions = { rootMargin: '200px 0px', threshold: 0.01 };
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset && img.dataset.src) {
                        img.src = img.dataset.src;
                        delete img.dataset.src;
                    }
                    img.classList.remove('lazy');
                    obs.unobserve(img);
                }
            });
        }, lazyObserverOptions);

        document.querySelectorAll('img.lazy').forEach(img => observer.observe(img));
    } else {
        // fallback: load all immediately
        document.querySelectorAll('img.lazy').forEach(img => {
            if (img.dataset && img.dataset.src) img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}
