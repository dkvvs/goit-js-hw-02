let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

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
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
    numbers.push(input);
  }
}
