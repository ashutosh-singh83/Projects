let clickAudio = new Audio("/audio/mouseVoice.mp3");

const cardArray = [
  {
    name: "Python",
    img: "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/npm/@programming-languages-logos/html@0.0.1/html_256x256.png",
  },
  {
    name: "CSS",
    img: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
  },
  {
    name: "JavaScript",
    img: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
  },
  {
    name: "NodeJS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  },
  {
    name: "MongoDB",
    img: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
  },
];

const parentDiv = document.querySelector("#card_section");
//step 2:-dupliacte each card
const gameCard = cardArray.concat(cardArray);
//step 3- note that, this function shuffles the cards everytime we refresh the page instead of modifying the original one
const myNumbers = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
const shuffledCards = myNumbers(gameCard);
//step4- Add CSS to show which cards have been selected
let clickCount = 0;
let firstCard = "";
let secondCard = "";
//styling the match cards
const matchCards = () => {
  let card_selected = document.querySelectorAll(".card_selected");
  card_selected.forEach((card) => {
    card.classList.add("card_matched");
  });
};

const resetGame = () => {
  clickCount = 0;
  firstCard = "";
  secondCard = "";
  let card_selected = document.querySelectorAll(".card_selected");
  card_selected.forEach((card) => {
    card.classList.remove("card_selected");
  });
};

parentDiv.addEventListener("click", (e) => {
  clickAudio.play();
  let currCard = e.target;
  if (currCard.id === "card_section") {
    return false;
  }
  clickCount++;
  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = currCard.parentNode.dataset.name;
      currCard.parentNode.classList.add("card_selected");
    } else {
      secondCard = currCard.parentNode.dataset.name;
      currCard.parentNode.classList.add("card_selected");
    }
    if (firstCard !== "" && secondCard !== "") {
      //step 7- adding delay
      if (firstCard === secondCard) {
        setTimeout(() => {
          matchCards();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});
//step 1:-create each game card
for (let i = 0; i < shuffledCards.length; i++) {
  let childDiv = document.createElement("div");
  parentDiv.appendChild(childDiv);
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledCards[i].name;

  let frontCard = document.createElement("div");
  childDiv.appendChild(frontCard);
  frontCard.classList.add("frontCard");

  let backCard = document.createElement("div");
  childDiv.appendChild(backCard);
  backCard.classList.add("backCard");
  backCard.style.backgroundImage = `url(${shuffledCards[i].img})`;
}
