let userscore=0;
let compscore=0;
const choices =document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const compchoice = () => {
    const option =["rock","paper","scissor"];
    const randidx =Math.floor(Math.random()*3);
    return option[randidx];
};
const drawgame =() =>{
    console.log("game was draw");
    msg.innerText="game was draw";
    msg.style.backgroundColor="rgb(42, 42, 118)";
}
const showiner =(userwin)=>{
    if(userwin) {
        console.log("You win");
        userscore++;
        user.innerText=userscore;
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else {
        console.log("You lose");
        compscore++;
        comp.innerText=compscore;
        msg.innerText="you lose"
        msg.style.backgroundColor="red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice=",userchoice);
    const compchoicee= compchoice();
    console.log("comp choice=",compchoicee);
    if (userchoice == compchoicee){
        drawgame();
    }
    else {
        let userwin=true;
        if (userchoice === "rock") {
            userwin=compchoicee === "paper"? false:true;
        } else if (userchoice==="paper"){
            userwin=compchoicee === "scissor"? false:true;
        } else {
            userwin=compchoicee === "rock"? false:true;
        }
        showiner (userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id"); 
        playgame(userchoice);
    });
});