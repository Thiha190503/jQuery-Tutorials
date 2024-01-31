$(document).ready(function () {
  var result = 0;
  var prevEntry = 0;
  var opearation = null;
  var currentEntry = "0";
  updateScreen(result);

  $(".button").on("click", function (evt) {
    var buttonPressed = $(this).html();
    // console.log(buttonPressed);

    if (buttonPressed === "C") {
      result = 0;
      currentEntry = "0";
    } else if (buttonPressed === "CE") {
      currentEntry = "0";
    } else if (buttonPressed === "back") {
      currentEntry = currentEntry.substring(0, currentEntry.length - 1);
    } else if (buttonPressed === "+/-") {
      currentEntry *= -1;
    } else if (buttonPressed === ".") {
      currentEntry += ".";
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === "0") currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOpeator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      opearation = buttonPressed;
      currentEntry = "";
    } else if (buttonPressed === "%") {
      currentEntry = currentEntry / 100;
    } else if (buttonPressed === "sqrt") {
      currentEntry = Math.sqrt(currentEntry);
    } else if (buttonPressed == "1/x") {
      currentEntry = 1 / currentEntry;
    } else if (buttonPressed == "pi") {
      currentEntry = Math.PI;
    } else if (buttonPressed == "=") {
      currentEntry = operate(prevEntry, currentEntry, opearation);
    }
    updateScreen(currentEntry);
  });
});

updateScreen = function (displayValue) {
  var displayValue = displayValue.toString();
  $(".screen").html(displayValue.substring(0, 10));
};

isNumber = function (value) {
  return !isNaN(value);
};

isOpeator = function (value) {
  return value === "/" || value === "*" || value === "+" || value === "-";
};

operate = function (a, b, opearation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, opearation);
  if (opearation === "+") {
    return a + b;
  }
  if (opearation === "-") {
    return a - b;
  }
  if (opearation === "*") {
    return a * b;
  }
  if (opearation === "/") {
    return a / b;
  }
};
