// const person = {
//   name: "Andrew",
//   age: 2,
//   location: {
//     city: "Paris",
//     temp: 3
//   }
// };
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);
// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: "Vernon Subutex",
//   author: "Virginie Despentes",
//   publisher: {
//     name
//   }
// };
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

const address = ["100 rue Lamarck", "75018"];

const [, zipcode, city = 'Paris'] = address;
console.log(`You are in ${city}, ${zipcode}`);

const item = ['coffee (hot)', '2', '2.50', '2.75'];
const [product, , mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}€`);
