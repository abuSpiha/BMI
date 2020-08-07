//Define the elements
const mainScreen = document.querySelector(".main-screen"),
   heightInput = document.querySelector("#height-input"),
   weightInput = document.querySelector("#weight-input"),
   calcButton = document.querySelector("#calc");

const resultScreen = document.querySelector(".r-screen"),
   bmiResult = document.querySelector("#bmi-r"),
   weightState = document.querySelector("#weight-state"),
   agineButton = document.querySelector("#try-agine"),
   bestWeight = document.querySelector("#best-wieght"),
   moreORless = document.querySelector("#more-less");

const perfectBmi = 18.5;

//events
calcButton.addEventListener("click", calc);

//functions
function calc() {
   let height = heightInput.value / 100;
   let weight = weightInput.value;
   let bmi = weight / (height * height);

   if (weight >= 15 && height >= 1) {
      bmiResult.textContent = bmi.toFixed(1);
   } else {
      alert("Please enter correct information");
   }
}
