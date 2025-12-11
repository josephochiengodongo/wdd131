function showLastModified() {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById('lastModified');
}

tours.forEach(tour => {
console.log('${tour.name}-USD ${tour.price}-${tour.place}');
});    


const tourPlace=['Maasai Mara','Tsavo National Park','Nyali Beach','Hells Gate','Amboseli National Park'];
tourPlace.push('Lake Naivasha National Park');
console.log(tourPlace);

const heading=document.getElementById('mainTitle');
heading.textContent="welcome to contact page";

const btm=document.getElementById('submit');
btm.addEventListener ("click", ()=>{
    alert("subscribe!");
});

let tour=['Maasai Mara','Tsavo National Park','Nyali Beach','Hells Gate'];
localStorage.setItem('tours',JSON.stringify(tours));



const tours=['Maasai Mara','Tsavo National Park','Nyali Beach','Hells Gate'];
    tours.forEach(tour=> {
console.log('Tour available: ${tour}');
});












