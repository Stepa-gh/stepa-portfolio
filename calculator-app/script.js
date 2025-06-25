// script.js

function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "-", "+"];
  
    // Prevent spacebar or any unwanted key from affecting the app
    if (event.code === "Space") {
      event.preventDefault();
      return;
    }
  
    if (allowedKeys.includes(key)) {
      event.preventDefault(); // Prevent accidental focus movement
      appendValue(key);
    } else if (key === "Enter" || key === "=") {
      event.preventDefault();
      calculate();
    } else if (key === "Backspace") {
      event.preventDefault();
      backspace();
    } else if (key === "Escape") {
      event.preventDefault();
      clearDisplay();
    }
  });
  document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("light");
  });
  function calculate() {
    try {
      const expression = document.getElementById("display").value;
      const result = eval(expression);
      document.getElementById("display").value = result;
      
      // Add to history
      const historyList = document.getElementById("history-list");
      const newItem = document.createElement("li");
      newItem.textContent = `${expression} = ${result}`;
      historyList.prepend(newItem); // add to top
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
    