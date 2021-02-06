"use strict";

//setting up
window.addEventListener("load", start);

function start() {
  console.log("start");
  clickCalculate();
}

function clickCalculate() {
  console.log("click calculate");
  document.querySelector("#calculate").addEventListener("click", readOperator);
}

function readFirstNumber() {
  console.log("read first number");
  //read first number and convert string into a number
  const firstNumber = parseInt(document.querySelector("#firstnumber").value);
  return firstNumber;
}

function readSecondNumber() {
  //read second number and convert string into a number
  console.log("read second number");
  const secondNumber = parseInt(document.querySelector("#secondnumber").value);
  return secondNumber;
}

function readOperator() {
  //collect numbers
  console.log("read operator");
  const firstInputNumber = readFirstNumber();
  const secondInputNumber = readSecondNumber();
  const operator = document.querySelector("#operator").value;

  if (operator == "add") {
    calculationAdd(firstInputNumber, secondInputNumber);
  } else if (operator == "sub") {
    calculationSub(firstInputNumber, secondInputNumber);
  } else if (operator == "mul") {
    calculationMul(firstInputNumber, secondInputNumber);
  } else if (operator == "div") {
    calculationDiv(firstInputNumber, secondInputNumber);
  }
}

function calculationAdd(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and add them
  const resultat = firstnumber + secondnumber;
  console.log(resultat);
  writeResultInFirstNumberField(resultat);
}

function calculationSub(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and sub them
  const resultat = firstnumber - secondnumber;
  console.log(resultat);
  writeResultInFirstNumberField(resultat);
}

function calculationMul(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and mul them
  const resultat = firstnumber * secondnumber;
  console.log(resultat);
  writeResultInFirstNumberField(resultat);
}

function calculationDiv(firstnumber, secondnumber) {
  //takes the numbers fra readOperator and div them
  const resultat = firstnumber / secondnumber;
  console.log(resultat);
  writeResultInFirstNumberField(resultat);
}

function writeResultInFirstNumberField(resultat) {
  //creats an elemnt to put inside "listElement"
  let listElement = document.createElement("li");
  let createListString = document.createTextNode(resultat.toString());
  listElement.appendChild(createListString);
  document.getElementById("results").appendChild(listElement);
  document.querySelector("#results").scrollTo(0, 10000);
  document.querySelector("#firstnumber").value = resultat.toString();
}
