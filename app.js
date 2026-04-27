
function calculateResult() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultText = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultText.innerText = "Result: Please enter valid numbers";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operation";
  }

  resultText.innerText = `Result: ${result}`;
}
