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

// const silverCardNewPrice = document.querySelector('#silverCardPrice')
// const goldCardNewPrice = document.querySelector('#goldCardPrice')
// const firstDateOfThePriceChange = new Date('2022-03-21 00:00').toISOString();
// const secondDateOfThePriceChange = new Date('2022-03-25 00:00').toISOString();

// let timer = setInterval(() => {
//   if (firstDateOfThePriceChange <= new Date().toISOString()) {
//     silverCardNewPrice.textContent = '4 500 ₽'
//     goldCardNewPrice.textContent = '6 300 ₽'
//     if (secondDateOfThePriceChange <= new Date().toISOString()) {
//       silverCardNewPrice.textContent = '5 500 ₽'
//       goldCardNewPrice.textContent = '7 000 ₽'
//       clearInterval(timer)
//     }
//   }
// }, 1000)

const silverCardNewPrice = document.querySelector('#silverCardPrice')
const goldCardNewPrice = document.querySelector('#goldCardPrice')

const firstDateOfThePriceChange = '2022-03-21 00:00';
const secondDateOfThePriceChange = '2022-03-25 00:00';

var moscowTime = moment().utcOffset(3).format("YYYY-MM-DD HH:mm");

let timer = setInterval(() => {
  if (firstDateOfThePriceChange <= moscowTime) {
    silverCardNewPrice.textContent = '4 500 ₽'
    goldCardNewPrice.textContent = '6 300 ₽'
  }
  if (secondDateOfThePriceChange <=  moscowTime) {
    silverCardNewPrice.textContent = '5 500 ₽'
    goldCardNewPrice.textContent = '7 000 ₽'
    clearInterval(timer)
    }
}, 1000)
