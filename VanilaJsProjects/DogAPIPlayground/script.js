// https://dog.ceo/api/breeds/image/random
const dogImagediv= document.getElementById('dog-image');
const getDog=document.getElementById('get-dog');
// let src;


getDog.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).
    then(json =>{
    dogImagediv.innerHTML=`<img src='${json.message}' width='300' height='300'>`
    })
})
