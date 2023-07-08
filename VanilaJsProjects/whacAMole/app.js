const mole =document.querySelector('.mole');
const timeLeft=document.querySelector("#time-left");
const score =document.querySelector('#score');
const squares=document.querySelectorAll('.square');

let result =0;
let hitPosition;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole');

    hitPosition=randomSquare.id;
}
function moveMole() {
   let timerId= setInterval(randomSquare, 500)
}
moveMole()
