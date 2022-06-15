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

  }

  appendNumber(number) {
    this.currentNumber = number
  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentNumberTextElement.innerText = this.currentNumber
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
const decimalButton = document.querySelector(".decimalButton");
const equalsButton = document.querySelector(".equalsButton");


const calculator = new Calculator(previousNumberTextElement, currentNumberTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
});
