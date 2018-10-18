// const person = {
//   name: 'Tze',
//   age: 56,
//   location: {
//     city: 'Bisbee',
//     state: 'AZ',
//     country: 'United States',
//   }
// };

// // Destructure an object to use named variables, avoiding long object dot-notation refs.
// // Destructuring supports default values and renaming.
// const { name = '[Anonymous]', age } = person;
// const { city, state: stateOrProvince, country } = person.location;

// console.log(`${name} is ${age}. He lives in ${city}, ${stateOrProvince}, ${country}.`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};
const {title, author} = book;
const { name: publisherName = '[self-published]' } = book.publisher;
console.log(`"${title}\" by ${author} is published by ${publisherName}.`); // "Ego is the Enemy" by Ryan Holiday is published by Penguin.

// Destructure array to use semantic variables, avoiding array notation that uses hard-to-decipher numbered indices.
const address = [
  '522 Camino de Nevada',
  'Bisbee',
  'AZ',
  '85603',
  'United States'
];
const [ , city, state ] = address;
console.log(`I live in ${city}, ${state}.`);  // I live in Bisbee, AZ.

const item = ['Coffee (iced)', '$3.00', '$4.50', '$6.00'];
const [ name, , mediumPrice ] = item;
console.log(`A medium ${name} costs ${mediumPrice}.`);
