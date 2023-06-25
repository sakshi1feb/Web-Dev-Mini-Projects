let computerChoiceDisplay =document.getElementById("computer-choice");
let UserChoiceDisplay =document.getElementById("user-choice");
let resultDisplay=document.getElementById("result");
let selectorChoice=document.querySelectorAll(".btn");
let userChoice;
let computerChoice;
let result;


selectorChoice.forEach(function(btn){
    btn.addEventListener("click",function(e){
        userChoice=e.target.id;
        UserChoiceDisplay.innerHTML=userChoice;
        computerChoiceSelection();
        getResult();

    });
});


function computerChoiceSelection(){
        let choice=Math.floor(Math.random()*3)+1;
        if(choice===1)
            computerChoice="rock";
        if(choice===2)
            computerChoice="paper";
        if(choice===3)
            computerChoice="scissors";

            computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if(computerChoice===userChoice)
            result="It is a draw";
    if(computerChoice==='rock'&& userChoice==="paper")
            result= "You win!";
    if(computerChoice==='rock'&& userChoice==="scissors")
            result ="You loose!"
    if(computerChoice==="paper"&& userChoice==="rock")
        result="You loose!"
    if(computerChoice==="paper"&& userChoice==="scissors")
        result="You win!"
    if(computerChoice==="scissors"&& userChoice==="paper")
        result="You loose!"
    if(computerChoice==="scissors"&& userChoice==="rock")
        result="You win!"


    resultDisplay.innerHTML=result;
}
