# Projects Related to DOM

## Project link
[Click here] ( )

#Solution code

## project 1

```Javascript
console.log("Sandeep")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  }
  )
});

```
## project 2
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop the default first

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  // using parse what values you get will  convert in integer value
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please Give a Valid Height ${height}`;

  }else if  (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid Weight ${weight}`;
}
else{
  const BMI = (weight / ((height)*(height)/10000)).toFixed(2);
  // show the result
 
  let msg  = "";
  const  guide1  = " Under eight";
  const guide2 = "Normal Range";
  const guide3 = "Overweight";

  if( BMI <= 18.6){
   msg = guide1;
  }
  else if( BMI > 18.6 && BMI < 24.9)
  {
     msg  = guide2;


  }else{
    msg = guide3;
  }

  results.innerHTML = `<span>${BMI}  <br> You are ${msg}</span>`;
}
});

```

## Project 3

```javascript
const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')
// either use getElementByID or U can Use document.querySelector()   both will work;

// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();

  clock.style.color = 'black';
  clock.style.fontFamily = "bold,Times New Roman, Times, serif";

},1000);

```

## Project 4
``` javascript
let randomNumber = parseInt(Math.random()*100 +1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi  = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
  })}


function validateGuess(guess){
// it simply check the  input are in the valid range or not;
if(isNaN(guess)){
    alert('Please Enter a Valid number ♥')
}else if(guess < 1){  alert('Please Enter a number more than 1')}
else if(guess > 100){alert('Please Enter a number less than 100')}
else{
  prevGuess.push(guess);
  if(numGuess === 11){
    displayGuess(guess);
    displayMessage(`Game Over. Random number was 
    ${randomNumber}`);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
}



function checkGuess(guess){
  // it check that the guessed number is equal to the randomNumber or not;
  // if its low then show low or high vice versa
   
  if(guess === randomNumber ){
    displayMessage(`You Guessed it Right \u{2764}\u{FE0F}`);
    endGame();
  }else if(guess  < randomNumber){
      displayMessage(`Number is Tooo Low`);
  }
  else{
    displayMessage(`Number is Tooo High`)
  }


}

function displayGuess(guess){
// it simply  clean the display value so that you can take the new Input;
// it showa the  guesses.
// it update the remaininhg guesses 
userInput.value = '';
guessSlot.innerHTML += `${guess}   `;
numGuess++;
remaining.innerHTML = `${11- numGuess}`
}
// all dom are in this 
function displayMessage(message){   //
// it prints the Low or High Message 
lowOrHi.innerHTML = `<h2> ${message}</h2>`
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame"> Start  new Game</h2>`
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame()
{
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100 +1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame  = true;
  
})
}
```