/*** Define the elements ***/

//min screen
const mainScreen = document.querySelector(".main-screen"),
   heightInput = document.querySelector("#height-input"),
   weightInput = document.querySelector("#weight-input"),
   calcButton = document.querySelector("#calc");

//resuts screen
const resultScreen = document.querySelector(".r-screen"),
   bmiResult = document.querySelector("#bmi-r"),
   weightState = document.querySelector("#weight-state"),
   agineButton = document.querySelector("#try-agine"),
   bestWeight = document.querySelector("#best-weight"),
   moreORless = document.querySelector("#more-less");

/*** Constants ***/

const minPerfect = 18.5,
   maxPerfect = 25;

/*** events ***/

calcButton.addEventListener("click", calc); //Calculate button event
agineButton.addEventListener("click", () => {
   animate(0);
   weightInput.value = "";
   heightInput.value = "";
});

/*** functions ***/

//Execute when press on Calculate button
function calc() {
   let height = heightInput.value / 100; //take height input value and convert it to "metres"
   let weight = weightInput.value; //take weight value
   let bmi = weight / (height * height); //Calculate bmi :)

   /*** add results if the input values is correct ***/
   if (weight >= 10 && height >= 0.5) {
      // add BMI
      bmiResult.textContent = bmi.toFixed(1);

      //add weightState
      function weightStateT() {
         if (bmi <= 16) {
            weightState.textContent = "very underweight";
         } else if (bmi < 18.5 && bmi > 16) {
            weightState.textContent = "underweight";
         } else if (bmi >= 18.5 && bmi <= 25) {
            weightState.textContent = "Normal";
            weightState.style.color = "#24a19c";
         } else if (bmi > 25 && bmi <= 30) {
            weightState.textContent = "Overweight";
         } else if (bmi > 30 && bmi <= 35) {
            weightState.textContent = "Obese Class I";
         } else if (bmi > 35) {
            weightState.textContent = "very Obese";
         }
      }

      //add perfect weight
      function perfectWeight() {
         let min = Math.floor(height * height * minPerfect); //min perfect weight
         let max = Math.floor(height * height * maxPerfect); // max perfect weight

         //add perfect weight to this height
         bestWeight.textContent = `${min}kg - ${max}kg`;

         //add how mutch you need to be come in normal weight
         if (min > weight) {
            moreORless.textContent = `to get ${min - weight}kg `;
         } else if (max < weight) {
            moreORless.textContent = `to lose ${weight - max}kg `;
         } else {
            moreORless.textContent = "to keep this weight";
         }
      }

      weightStateT();
      perfectWeight();
      animate(-100);

      //do this if the info is incorrect
   } else {
      alert("Please enter correct information");
   }
}

// move between the main screen and the result screen and add some animation :}

function animate(x) {
   mainScreen.style.transform = `translateX(${x}vw)`;
   resultScreen.style.transform = `translateY(${x}vh)`;
}
