const textArea = document.querySelector("#textarea");
const totalChar = document.querySelector("#total_char");
const remainingChar = document.querySelector("#rem_char");
let userChar = 0;
const updateCounter = () => {
  userChar = textArea.value;
  userCharLength = userChar.length;
  totalChar.innerText = userCharLength;
  remainingChar.innerText = 150 - userCharLength;
};
textArea.addEventListener("keyup", updateCounter);

const copyText = () => {
  textArea.select();
  navigator.clipboard.writeText(textArea.value);
};
