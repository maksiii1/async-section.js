async function getSecond() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (number < 6) {
        resolve(`Успешно, число: ${number}`);
      } else {
        reject(`Ошибка, число: ${number}`);
      }
    }, number * 1000);
  });
}

(async () => {
  try {
    const result = await getSecond();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
