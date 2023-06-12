// seting the count value to 0
let count =0;

const value = document.querySelector("#value");

 const btns= document.querySelectorAll(".btn");

 btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const btnSelected= e.currentTarget.classList;
        if(btnSelected.contains("decrease")){
            count--;
        }else
        if(btnSelected.contains("reset")){
            count=0;
        }else if(btnSelected.contains("increase")){
            count++;
        }
        if(count>0){
            value.style.color="green";
        }else if(count<0){
            value.style.color="red";
        }else{
            value.style.color="#222";
        }
        value.textContent=count;
    });
 });
