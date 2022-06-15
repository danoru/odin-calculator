let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const clear = document.querySelector(".clearButton");
const backspace = document.querySelector(".deleteButton");
const numberButtons = document.querySelector(".numberButton");
const operatorButtons = document.querySelector(".operatorButton");
const equals = document.querySelector(".equalsButton");
const decimal = document.querySelector(".decimalButton");

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
  };
};

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  operator = op;
  storedNum = currentNum;
  previousDisplayNumber.textContent = storedNum + " " + operator;
  currentNum = "";
  currentDisplayNumber.textContent = "";
}

function calculate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+"){
    previousNum = previousNum + currentNum;
  }}