const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rndNum = Math.round(Math.random());
    switch (rndNum) {
      case 0:
        resolve({
          name: 'Tze',
          age: 56
        });
        break;
      case 1:
        reject('Something went wrong');
        break;
      default:
        reject('Something went really wrong!');
    }
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});

console.log('after');
