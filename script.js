class Calculator {
  constructor(previousNumberTextElement, currentNumberTextElement) {
    this.previousNumberTextElement = previousNumberTextElement
    this.currentNumberTextElement = currentNumberTextElement
    this.clearNumber()
  }

  clearNumber() {
    this.previousNumber = ""
    this.currentNumber = ""
    this.operation = undefined
  }

  deleteNumber() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return
    this.currentNumber = this.currentNumber.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentNumber === "") return
    if (this.previousNumber !=="") {
      this.compute()
    }

    this.operation = operation
    this.previousNumber = this.currentNumber
    this.currentNumber = ""
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousNumber)
    const current = parseFloat(this.currentNumber)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case "+": 
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "×":
        computation = prev * current
        break
      case "÷":
        computation = prev / current
        break
      case "%":
        computation = current / 100
        break
      case "+/-":
        computation = current * -1
        break
      default:
        return
    }
  this.currentNumber = computation
  this.operation = undefined
  this.previousNumber = ""
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split(".")[0])
    const decimalDigits = stringNumber.split(".")[1]
    let integerDisplay 
    if (isNaN(integerDigits)) {
      integerDisplay = "" 
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentNumberTextElement.innerText =
      this.getDisplayNumber(this.currentNumber)
    if (this.operation != null) {
      this.previousNumberTextElement.innerText = 
        `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`
    } else {
      this.previousNumberTextElement.innerText = ""
    }
  }
};

const previousNumberTextElement = document.querySelector(".previousNumber");
const currentNumberTextElement = document.querySelector(".currentNumber");

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

const clearButton = document.querySelector(".clearButton");
const negativeButton = document.querySelector(".negativeButton");
const percentButton = document.querySelector(".percentButton");
const deleteButton = document.querySelector(".deleteButton");
const equalsButton = document.querySelector(".equalsButton");


const calculator = new Calculator(previousNumberTextElement, currentNumberTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
});

equalsButton.addEventListener("click", button => {
  calculator.compute();
  calculator.updateDisplay();
});


clearButton.addEventListener("click", button => {
  calculator.clearNumber();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", button => {
  calculator.deleteNumber();
  calculator.updateDisplay();
});