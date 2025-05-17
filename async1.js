function tenSeconds(number, callback) {
  setTimeout(() => {
    callback(number);
  }, 1000);
}

tenSeconds(1, (n) => {
  console.log(1);
  tenSeconds(2, (n) => {
    console.log(2);
    tenSeconds(3, (n) => {
      console.log(3);
      tenSeconds(4, (n) => {
        console.log(4);
        tenSeconds(5, (n) => {
          console.log(5);
          tenSeconds(6, (n) => {
            console.log(6);
            tenSeconds(7, (n) => {
              console.log(7);
              tenSeconds(8, (n) => {
                console.log(8);
                tenSeconds(9, (n) => {
                  console.log(9);
                  tenSeconds(10, (n) => {
                    console.log(10);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
