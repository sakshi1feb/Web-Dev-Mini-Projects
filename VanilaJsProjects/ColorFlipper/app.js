const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn=document.getElementById("btn");
let color=document.querySelector(".color");
btn.addEventListener("click",function(){
    let randomNumber= getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    // alert("hii");
    color.innerHTML=colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
