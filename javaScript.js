/* JavaScript for Home Page
made by: Nerijus Kmitas x24170232 */

// Get the reference to the quiz button by button ID
const quizButton = document.getElementById('quizButton');

// Check or the button exists on the page
if (quizButton) {
  // Adding event listener to the quiz button
  quizButton.addEventListener('click', function () {
    //Log the message in the browser when button is clicked
    console.log('Quiz button clicked! Navigating to Page 2.');
  });
}

/* JavaScript for Statistics page
made by: Nerijus Kmitas x24170232 */

//Get references to slider input and display elements
const slider = document.getElementById("rangeSlider"); //Element to show Range Slider
const sliderValue = document.getElementById("sliderValue"); //Element to show the percentage
const sliderText = document.getElementById("sliderText"); //Text to display people fed

//To make sure that all slider elements are present on the page
if (slider && sliderValue && sliderText) {
  //Add an "input" event listener so this so this will run when user moves slider
  slider.addEventListener("input", () => {
    //Convert slider value String into integer value
    const value = parseInt(slider.value);

    // Update the visible percentage value with the current value
    sliderValue.textContent = `${value}%`;

    // Calculate how many people could be fed (based on max 3.45 billion)
    const estimatedPeopleFed = Math.floor((value / 100) * 3450); // Result will be displayed in millions

    // Update the text below the slider
    sliderText.textContent = `We could feed over ${estimatedPeopleFed.toLocaleString()} million people annually`;
  });
}

/* JavaScript for Quiz Game
made by: Mateus Silva De Oliveira x23316748 */

document.getElementById("submitBTN").addEventListener("click", function () {
  const answers = {
      q1: "10%",
      q2: "All of the above",
      q3: "25",
      q4: "100%",
      q5: "Women and girls",
      q6: "25%",
      q7: "10%",
      q8: "7%",
      q9: "Sustainable farming",
      q10: "All of the above"
  };

  const score = 0;

  for (const q in answers) {
      const radios = document.getElementsByName(q);
      for (const i = 0; i < radios.length; i++) {
          if (radios[i].checked && radios[i].value === answers[q]) {
              score++;
              break;
          }
      }
  }

  alert("You got " + score + " out of 10 correct.");
});

/* JavaScript for Food waste Calculator
made by: Mateus Silva De Oliveira x23316748 */

   // Food prices object
    const calculateBtn = document.getElementById('calculateWasteBtn');
    const foodPrices = {
        bread: 1.00,
        apple: 0.50,
        milk: 3.00,
        potato: 0.20,
        tomato: 0.70,
        broccoli: 2.00,
        eggs: 0.25
    };

    calculateBtn.addEventListener('click', function() {
        // Get selected food and wasted quantity
        const foodItem = document.getElementById('foodItem').value;
        const quantity = parseInt(document.getElementById('quantityWasted').value);

        // Calculate annual waste (52 weeks in a year)
        const annualUnits = quantity * 52;
        const moneyLost = annualUnits * foodPrices[foodItem];

        // Display food name
        const foodName = document.getElementById('foodItem').options[document.getElementById('foodItem').selectedIndex].text.split('(')[0].trim();

        // Update results
        document.getElementById('annualUnits').textContent = annualUnits.toFixed(0);
        document.getElementById('foodItemName').textContent = foodName.toLowerCase();
        document.getElementById('estimatedMoney').textContent = moneyLost.toFixed(2);
    });
