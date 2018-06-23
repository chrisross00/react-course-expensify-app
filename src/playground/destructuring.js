//
// Object Destructuring
//

// const person = {
//   name: 'Chris',
//   age: 28,
//   location: {
//     city: 'Boise',
//     temp: 101
//   }
// };

// const { name: firstName = 'Anon', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;


// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`Publisher was ${publisherName}`);

//
// Array desctructuring
//

const address = ['2470 S. Cole Road', 'Boise', 'Idaho'];
const [street, city, state, zipcode = '55555'] = address;
console.log(`You are in ${zipcode} `);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [order, , medium] = item;
console.log(`A medium ${order} costs ${medium}`);
