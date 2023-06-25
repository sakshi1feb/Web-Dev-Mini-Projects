// Rock paper Scissors game version 2 (intermediate way)
let userChoiceDisplay=document.createElement("h1");
let computerChoiceDisplay=document.createElement("h1");
let resultDisplay=document.createElement("h1");
let gameGrid=document.getElementById("game");
gameGrid.append(userChoiceDisplay,computerChoiceDisplay,resultDisplay);

const choice=['rock','paper','scissors'];
let userChoice, computerChoice,result;


for(let i=0;i<choice.length;i++){
    let btn=document.createElement("button");
    btn.innerHTML=choice[i];
    btn.id=choice[i];
    btn.addEventListener("click",handelclick);
    gameGrid.appendChild(btn);
}

function handelclick(e){
        userChoice=e.target.id;
        userChoiceDisplay.innerHTML="User  Choice:- "+userChoice;
        generateComputerChoice();
        getResult();
}
function generateComputerChoice(){
   computerChoice =choice[Math.floor(Math.random()*choice.length)];
   computerChoiceDisplay.innerHTML="Computer's choice :- "+computerChoice;
}

function getResult(){
 switch(computerChoice + userChoice){
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
        result="YOU LOOSE! ☹";
        break;

    case 'scissorspaper':
    case 'paperrock':
    case 'scissorspaper':
        result="YOU WIN! 😀";
        break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        result ="IT'S A DRAW!😐"
 }
 resultDisplay.innerHTML=result;
}
// End of Rock paper Scissors game version 2 (intermediate way)






//  Rock paper scissors game version 1 (beginner way)
// let computerChoiceDisplay =document.getElementById("computer-choice");
// let UserChoiceDisplay =document.getElementById("user-choice");
// let resultDisplay=document.getElementById("result");
// let selectorChoice=document.querySelectorAll(".btn");
// let userChoice;
// let computerChoice;
// let result;


// selectorChoice.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         userChoice=e.target.id;
//         UserChoiceDisplay.innerHTML=userChoice;
//         computerChoiceSelection();
//         getResult();

//     });
// });


// function computerChoiceSelection(){
//         let choice=Math.floor(Math.random()*3)+1;
//         if(choice===1)
//             computerChoice="rock";
//         if(choice===2)
//             computerChoice="paper";
//         if(choice===3)
//             computerChoice="scissors";

//             computerChoiceDisplay.innerHTML=computerChoice;
// }

// function getResult(){
//     if(computerChoice===userChoice)
//             result="It is a draw";
//     if(computerChoice==='rock'&& userChoice==="paper")
//             result= "You win!";
//     if(computerChoice==='rock'&& userChoice==="scissors")
//             result ="You loose!"
//     if(computerChoice==="paper"&& userChoice==="rock")
//         result="You loose!"
//     if(computerChoice==="paper"&& userChoice==="scissors")
//         result="You win!"
//     if(computerChoice==="scissors"&& userChoice==="paper")
//         result="You loose!"
//     if(computerChoice==="scissors"&& userChoice==="rock")
//         result="You win!"


//     resultDisplay.innerHTML=result;
// }
