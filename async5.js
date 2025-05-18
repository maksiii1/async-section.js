function createPromise() {
  return new Promise((resolve) => {
    let number = Math.floor(Math.random() * 10) + 1;
    console.log(`Первоначальное число: ${number}`);
    resolve(number);
  });
}

function squareNumber(number) {
  return new Promise((response) => {
    setTimeout(() => {
      number *= number;
      console.log(`Квадрат числа: ${number}`);
      response(number);
    }, 3000);
  });
}

createPromise()
  .then(squareNumber)
  .then(squareNumber)
  .then((response) => {
    console.log(`Финальное число: ${response}`);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });
