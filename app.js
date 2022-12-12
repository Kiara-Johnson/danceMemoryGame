const cardArray = [
  {
    name: "balletShoes",
    img: "images/balletShoes.jpg",
  },
  {
    name: "danceInThePark",
    img: "images/danceInThePark.jpg",
  },
  {
    name: "danceShoes",
    img: "images/danceShoes.jpg",
  },
  {
    name: "onStage",
    img: "images/onStage.jpg",
  },
  {
    name: "pointeShoes",
    img: "images/pointeShoes.jpg",
  },
  {
    name: "theater",
    img: "images/theater.jpg",
  },
  {
    name: "christmasCDC",
    img: "images/christmasCDC.jpg",
  },
  {
    name: "tap",
    img: "images/tap.jpg",
  },
  {
    name: "balletShoes",
    img: "images/balletShoes.jpg",
  },
  {
    name: "danceInThePark",
    img: "images/danceInThePark.jpg",
  },
  {
    name: "danceShoes",
    img: "images/danceShoes.jpg",
  },
  {
    name: "onStage",
    img: "images/onStage.jpg",
  },
  {
    name: "pointeShoes",
    img: "images/pointeShoes.jpg",
  },
  {
    name: "theater",
    img: "images/theater.jpg",
  },
  {
    name: "christmasCDC",
    img: "images/christmasCDC.jpg",
  },
  {
    name: "tap",
    img: "images/tap.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const result = document.querySelector("#result");
const resetButton = document.querySelector('#reset').addEventListener('click', () => {
    window.location.reload();
});

let chosenCard = [];
let chosenCardId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/back.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const cardOneId = chosenCardId[0];
  const cardTwoId = chosenCardId[1];
  console.log(cards);
  if (cardOneId === cardTwoId) {
    cards[cardOneId].setAttribute("src", "images/blank.png");
    cards[cardTwoId].setAttribute("src", "images/blank.png");
    alert("Same card clicked");
  } 
 else if (chosenCard[0] == chosenCard[1]) {
    cards[cardOneId].setAttribute("src", "images/blank.png");
    cards[cardTwoId].setAttribute("src", "images/blank.png");
    cards[cardOneId].removeEventListener("click", flipCard);
    cards[cardTwoId].removeEventListener("click", flipCard);
    cardsWon.push(chosenCard);
    alert("you have a match");
  } else {
    cards[cardOneId].setAttribute("src", "images/back.png");
    cards[cardTwoId].setAttribute("src", "images/back.png");
    alert("Not a match");
  }
  chosenCard = [];
  chosenCardId = [];
  result.textContent = cardsWon.length;


  if (cardsWon.length == cardArray.length / 2) {
    result.textContent = cardsWon.length + " Congratulations! You found all the matches!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  chosenCard.push(cardArray[cardId].name);
  chosenCardId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (chosenCard.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
