function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").innerHTML = "⚠️ Please enter valid inputs.";
    return;
  }

  let bmi = weight / (height * height);
  let status = "";

  if (bmi < 18) status = "Underweight";
  else if (bmi >= 18 && bmi < 25) status = "Normal";
  else if (bmi >= 25 && bmi < 30) status = "Overweight";
  else status = "Obese";

  document.getElementById("result").innerHTML =
    "Your BMI is " + bmi.toFixed(2) + " → Status: " + status;
}
