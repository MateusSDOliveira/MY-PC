var selectedFood = "";
var selectedFoodText = document.getElementById("selected-food");
var wasteInfo = document.getElementById("wast");

var breadButton = document.getElementById("bread");
var riceButton = document.getElementById("rice");
var meatButton = document.getElementById("meat");
var vegetablesButton = document.getElementById("vegetables");

breadButton.onclick = function () {
  selectedFood = "BREAD";
  selectedFoodText.textContent = "Selected Food: " + selectedFood;
  wasteInfo.textContent = "";
};

riceButton.onclick = function () {
  selectedFood = "RICE";
  selectedFoodText.textContent = "Selected Food: " + selectedFood;
  wasteInfo.textContent = "";
};

meatButton.onclick = function () {
  selectedFood = "MEAT";
  selectedFoodText.textContent = "Selected Food: " + selectedFood;
  wasteInfo.textContent = "";
};

vegetablesButton.onclick = function () {
  selectedFood = "VEGETABLES";
  selectedFoodText.textContent = "Selected Food: " + selectedFood;
  wasteInfo.textContent = "";
};

document.getElementById('simulate').addEventListener('click', function () {
  switch (selectedFood) {
    case 'BREAD':
      wasteInfo.textContent = 'Around 35 million tons of bread are wasted worldwide each year.';
      break;
    case 'RICE':
      wasteInfo.textContent = 'Around 20 million tons of rice are wasted worldwide each year.';
      break;
    case 'MEAT':
      wasteInfo.textContent = 'Around 25 million tons of meat are wasted worldwide each year.';
      break;
    case 'VEGETABLES':
      wasteInfo.textContent = 'Around 30 million tons of vegetables are wasted worldwide each year.';
      break;
    default:
      wasteInfo.textContent = 'Please select a food first.';
  }
});