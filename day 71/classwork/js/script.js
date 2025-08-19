function myFnction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello Merab!');
    }, 5000);

    setTimeout(() => {
      reject('Rejects! Error!');
    }, 5000);
  });
}

// myFnction().then(function (resolves) {
//   console.log(resolves);
// });

myFnction().catch(function (rejects) {
  console.log(rejects);
});
