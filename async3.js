async function tenSeconds(number) {
  return new Promise((resolve) => {
    const interval = () => {
      if (number > 10) {
        resolve();
        return;
      }

      console.log(number++);
      setTimeout(interval, 1000);
    };

    interval();
  });
}

(async () => {
  await tenSeconds(1);
  console.log("The end!");
})();
