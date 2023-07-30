function changeButtonHeights() {
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");

  button1.style.height = height1+'px';
  button1.innerText = `${number1}`;
  // button1.disabled = true;
  button2.classList.add("disabled");


  button2.style.height = height2+'px';
  button2.innerText = `${number2}`;
  // button2.disabled = true;
  button2.classList.add("disabled");
  setTimeout(function() {
    window.location.href = "./last.html";
  }, 3000);

}

function generateRandomNumbers() {
  const min = 30;
  const max = 100 - min; // The maximum value is 100 minus the minimum to ensure their sum is 100

  const randomNumber1 = Math.floor(Math.random() * max) + min; // Generate a random number between min and (100 - min)
  const randomNumber2 = 100 - randomNumber1; // Calculate the second random number such that their sum is 100

  return [randomNumber1, randomNumber2];
}


const [number1, number2] = generateRandomNumbers();
var height1 = `${number1}`;
var height2 = `${number2}`;

height1 = parseInt(height1)+200;

height2 = parseInt(height2)+200;

function disagree(){
  window.location.href = "./disagree.html";
}