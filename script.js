"use strict";

//setting up
window.addEventListener("load", start);

function start() {
  console.log("start");
  clickCalculate();
}

function clickCalculate() {
  console.log("click calculate");
  document
    .querySelector("#calculate")
    .addEventListener("click", readFirstNumber);
}

function readFirstNumber() {
  console.log("read first number");
  //read first number
  const firstNumber = document.querySelector("#firstnumber").value;
  readSecondNumber();
}

function readSecondNumber() {
  console.log("read second number");
  const firstNumber = document.querySelector("#secondnumber").value;
}
