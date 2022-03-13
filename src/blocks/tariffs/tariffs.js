const cardOne = document.querySelector("#tariffs-card__1");
const cardTwo = document.querySelector("#tariffs-card__2");
const cardTree = document.querySelector("#tariffs-card__3");

function tarrifCardOne() {
  cardOne.classList.toggle("tariffs-card__1-open");
}

function tarrifCardTwo() {
  cardTwo.classList.toggle("tariffs-card__2-open");
}

function tarrifCardTree() {
  cardTree.classList.toggle("tariffs-card__3-open");
}
