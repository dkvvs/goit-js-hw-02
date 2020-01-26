let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");

  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  } else {
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    numbers.push(input);
    console.log(numbers);
  }
}

// const valueInputRef = document.querySelector(".js-value");
// const addValueBtn = document.querySelector(".js-add-value");
// const calcBtn = document.querySelector(".js-calculate");
// const numbers = [];
// let total = 0;

// addValueBtn.addEventListener("click", function() {
//   const value = Number(valueInputRef.value);

//   numbers.push(value);
//   valueInputRef.value = "";

//   console.log(numbers);
// });

// calcBtn.addEventListener("click", function() {
//   for (const number of numbers) {
//     console.log(number);
//     total += number;
//   }

//   console.log(`Общая сумма чисел равна ${total}`);
// });