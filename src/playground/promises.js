const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Tze',
      age: 56
    });
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2nd promise resolved');
    }, 3000);
  });
}).then((str) => {
  console.log('Does this 2nd then-fn run?', str);
}).catch((error) => {
  console.error(error);
});

console.log('after');
