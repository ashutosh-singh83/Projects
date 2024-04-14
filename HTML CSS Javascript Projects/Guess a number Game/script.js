let computerGuess;
let userGuess = [];
let audio = new Audio("/audio/mouseVoice.mp3");
let userNumUpdate = document.querySelector("#userNumUpdate");
const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  console.log(computerGuess);
  document.querySelector("#newGameBtn").style.display = "none";
  document.querySelector(".game_section").style.display = "none";
};
const startGame = () => {
  document.querySelector(".welcome_screen").style.display = "none";
  document.querySelector(".game_section").style.display = "block";
};
//main logic of our game
const compareGuess = () => {
  audio.play();

  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  inputBox.value = "";

  //check the value low or high

  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userNumUpdate.innerHTML = "Your number is greater";
    } else if (userNumber < computerGuess) {
      userNumUpdate.innerHTML = "Your number is smaller";
    } else {
      userNumUpdate.innerHTML = "Congratulations! It's correct, You won";
      document.querySelector("#newGameBtn").style.display = "inline";
      inputBox.setAttribute("disabled", true);
    }
  } else {
    if (userNumber == computerGuess) {
      userNumUpdate.innerHTML = "Congratulations! It's correct, You won";
      inputBox.value = "";
      document.querySelector("#newGameBtn").style.display = "inline";
      inputBox.setAttribute("disabled", true);
    } else {
      userNumUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
      inputBox.value = "";
      document.querySelector("#newGameBtn").style.display = "inline";
      inputBox.setAttribute("disabled", true);
    }
  }
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};
const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
const startNewGame = () => {
  audio.play();
  window.location.reload();
};
