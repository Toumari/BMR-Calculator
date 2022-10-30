ageInput = document.getElementById("age");
heightInput = document.getElementById("height");
weightInput = document.getElementById("weight");
bmrLabel = document.getElementById("bmr-result");
calculateBtn = document.getElementById("calculateBmr");
resultsSection = document.getElementById("results-section");
closeModalBtn = document.getElementById("close-modal");
howCalculateBtn = document.getElementById("how-calculate-bmr");
howCalculateModal = document.getElementById("bmr-explanation");

const calculateBMR = (age, height, weight) => {
  return 10 * weight + 6.25 * height - 5 * age + 5;
};

console.log(calculateBMR(27, 187, 120));

calculateBtn.addEventListener("click", (e) => {
  console.log("Calculating BMR...");
  e.preventDefault();
  if (ageInput.value && heightInput.value && weightInput.value) {
    const age = ageInput.value;
    const height = heightInput.value;
    const weight = weightInput.value;

    resultsSection.style.display = "block";

    const bmr = calculateBMR(age, height, weight);
    bmrLabel.innerHTML = `BMR: ${bmr} calories`;
  } else {
    alert("Please fill all the fields");
  }
});

howCalculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("How to calculate BMR");
  howCalculateModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked");
  howCalculateModal.style.display = "none";
});
