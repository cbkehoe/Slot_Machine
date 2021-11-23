/*----- constants -----*/

//const options = [1, 2, 3]
// const win = ['000', '111', '222']
//const outcomes = (min, max) => Math.floor(Math.random() * 0 - 3 +1) + min; 
//const results = outcomes (option => 0, 3)
/*----- app's state (variables) -----*/
let result1, result2, result3, outcomeMessage

//let display = results(result => results.outcomes);
/*----- cached element references -----*/
const slot1 = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const slot3 = document.getElementById('slot3')
const outcomes = document.getElementById('outcomes')
/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', () => {
    init()
    render()
})

/*----- functions -----*/
function checkWin() {
  if (result1 === result2 && result1 === result3) {
    outcomeMessage = 'You Win!'
  } else {
    outcomeMessage = 'Sorry, You Lose'
  }
  render()
}

function render() {
    slot1.innerText = result1
    slot2.innerText = result2
    slot3.innerText = result3
    outcomes.innerText = outcomeMessage
}

//document.write(result1, result2, result3);
//console.log(display)




// const outcomes = (small, big) => Math.floor(Math.random() * small - big +1) + small;
// const resultsRandom = () => outcomes(1, 3)
// //const resultsRandom = Math.floor(Math.random() * resultsRandom +1 );

// let result = '';

// console.log(resultsRandom)

function getRandNum() {
  return Math.floor(Math.random() *3);
}

function init(){
  result1 = getRandNum()
  result2 = getRandNum()
  result3 = getRandNum()
  // result4 = getRandNum()
  // result5 = getRandNum()
  // result6 = getRandNum()
  console.log(result1, result2, result3)
  checkWin()
}

init()
