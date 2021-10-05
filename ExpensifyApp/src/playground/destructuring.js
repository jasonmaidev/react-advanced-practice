const personOne = {
  name: 'Kyle',
  ageOld: 24,
  location: {
    street: 'long',
    city: 'somewhere'
  }
}

const printUser = ({ ageOld, location: { street, city } }) => console.log(`Age is ${ageOld} living in ${street} ${city}`);

printUser(personOne)

const add = ({ a, b }) => a + b;

console.log(add({ a: 1, b: 7 }));