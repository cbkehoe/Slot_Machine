/*----- constants -----*/

let result1, result2, result3, outcomeMessage, walletAmount, endGame


/*----- cached element references -----*/
const slot1 = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const slot3 = document.getElementById('slot3')
const outcomes = document.getElementById('outcomes')
const header = document.getElementById('wallet')
const button = document.querySelector('button')
/*----- event listeners -----*/
button.addEventListener('click', init)

/*----- functions -----*/
function checkWin() {
  if (result1 === result2 && result1 === result3) {
    outcomeMessage = 'You Win!'
  } else {
    outcomeMessage = 'Sorry Loser'
  }
  render()
}

function render() {
  slot1.innerText = result1
  slot2.innerText = result2
  slot3.innerText = result3
  outcomes.innerText = outcomeMessage
  header.innerHTML = wallet

}

let wallet = [10];

function earnLoseMoney() {
  if (result1 === result2 && result1 === result3) {
    wallet++;
  } else {
    wallet--;
  }
  render()
}

function getRandNum() {
  return Math.floor(Math.random() * 3);
}

function gameOver() {
  if (wallet === 0) {
    button.removeEventListener('click', init)
    outcomeMessage = 'Game Over'
  }
  render()
}

function bust() {
  if (wallet === 0) {
    outcomeMessage = 'Game Over'
  }
  render()
}
function init() {
  result1 = getRandNum()
  result2 = getRandNum()
  result3 = getRandNum()
  walletAmount = earnLoseMoney()
  endGame = gameOver()
  checkWin()
  render()
  bust() 
}
