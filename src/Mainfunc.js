import React from "react";

const amt_EL = document.getElementById("amount");
const basicCrcy_EL = document.getElementById("basicCurrency");
const targetCrcy_EL = document.getElementById("targetCurrency");

function calculate() {
  let amt = amt_EL.value;
  let basicCrcy = basicCrcy_EL.value;
  let targetCrcy = targetCrcy_EL.value;
  console.log(amt);
  console.log(basicCrcy);
  console.log(targetCrcy);
  fetch(
    `https://v6.exchangerate-api.com/v6/db6be6a69758392eb06f7863/latest/${basicCrcy}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[targetCrcy];
      console.log(rate);
      document.getElementById("textArea").innerHTML =
        amt + basicCrcy + "=" + (amt * rate).toFixed(2) + targetCrcy;
    })
    .catch((err) => console.log("Request Failed"));
}

function swap() {
  let temp = basicCrcy_EL.value;
  basicCrcy_EL.value = targetCrcy_EL.value;
  targetCrcy_EL.value = temp;
  calculate();
}
