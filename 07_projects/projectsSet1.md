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