function convertCurrency() {
  let amount = parseFloat(document.getElementById("amount").value);
  let rate = parseFloat(document.getElementById("currency").value);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("output").innerHTML = "⚠️ Enter valid amount.";
    return;
  }

  let result = amount * rate;
  document.getElementById("output").innerHTML =
    "Converted Amount: " + result.toFixed(2);
}
