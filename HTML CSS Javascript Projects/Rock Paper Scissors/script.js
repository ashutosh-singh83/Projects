let userScore=0;
let compScore=0;
let userScoreMsg=document.querySelector("#userScore");
let compScoreMsg=document.querySelector("#compScore");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg_text");
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let compChoiceIdx=Math.floor(Math.random()*3);
    return options[compChoiceIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreMsg.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreMsg.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    msg.innerText="Game draw. Play again";
    msg.style.backgroundColor="#1d3557";
}
const playGame=(userChoice)=>{
    
    const compChoice=genCompChoice();
    
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
        showWinner(userWin,userChoice,compChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    })
})