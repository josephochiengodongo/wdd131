const mainnav = document.querySelector('navigation');
const tembutton = document.querySelector('#menu');
tembutton.addEventListener('click', ()=>{mainnav.classList.toggle('show');tembutton.classList.toggle('show');});

