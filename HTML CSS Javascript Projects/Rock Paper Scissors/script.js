let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg_text");
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let compChoiceIdx=Math.floor(Math.random()*3);
    return options[compChoiceIdx];
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("You win")
        msg.innerText="You Won";
        msg.style.backgroundColor="green";
    }else{
        console.log("You lose")
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("game draw")
    msg.innerText="Game draw. Play again";
    msg.style.backgroundColor="#1d3557";
}
const playGame=(userChoice)=>{
    console.log("user=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp=",compChoice);
    //comparing user and comp choices
    let userWin=true;
    if(userChoice===compChoice){
        drawGame();
    }else{
        if(userChoice==="rock"){
            //paper scissors
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock scissors
            userWin=compChoice==="rock"?true:false;
        }else{
            //rock paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    })
})