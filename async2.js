const tenSeconds = new Promise((resolve) => {
  let i = 1;

  const interval = () => {
    if (i > 10) {
      resolve();
      return;
    }

    console.log(i++);
    setTimeout(interval, 1000);
  };

  interval();
});

tenSeconds.then(() => {
  console.log("The end!");
});
