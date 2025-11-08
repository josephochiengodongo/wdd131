const navigation=document.querySelector('.navigation');
const temButton=document.querySelector('#menu');
temButton.addEventListener('click', ()=>{
    navigation.classList.toggle('open');
    temButton.classList.toggle('open');
})




