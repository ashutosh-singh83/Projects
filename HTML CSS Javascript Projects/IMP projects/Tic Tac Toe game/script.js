let turnX = true;
let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let resetBtn = document.querySelector(".reset_btn");
let newBtn = document.querySelector(".new_btn");
let clickAudio = new Audio("/audio/click_voice.mp3");
let winnerAudio = new Audio("/audio/winner_music.mp3");
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    clickAudio.play();
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }

    box.disabled = "true";
    checkWinner();
  });
});
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
  clickAudio.play();
  enableBoxes();
  turnX = true;
  msgContainer.classList.add("hide");
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `Congratulations,Winner is ${winner}`;
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner", pos1val);
        winnerAudio.play();
        showWinner(pos1val);
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
