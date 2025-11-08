const mainnav=document.querySelector('.navigation');
const temButton=document.querySelector('menu');
temButton.addEventListener('click',()=>{
    mainnav.classList.toggle('show');
    temButton.classList.toggle('show')
})




