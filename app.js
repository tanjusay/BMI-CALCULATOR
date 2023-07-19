function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var bmiResult = document.getElementById("bmiResult");
    var bmiCategory = document.getElementById("bmiCategory");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      bmiResult.textContent = "Invalid input";
      bmiCategory.textContent = "";
      return;
    }

    var bmi = weight / (height * height);
    bmiResult.textContent = bmi.toFixed(2); // Display BMI with two decimal places

    if (bmi < 18.5) {
      bmiCategory.textContent = "Underweight";
      bmiCategory.style.color = "#ffc700"; 
    } else if (bmi < 25) {
      bmiCategory.textContent = "Normal Weight";
      bmiCategory.style.color = "green"; 
    } else if (bmi < 30) {
      bmiCategory.textContent = "Overweight";
      bmiCategory.style.color = "#ff9d00"; 
    } else {
      bmiCategory.textContent = "Obese";
      bmiCategory.style.color = "#ff5e00";
    }
  }
