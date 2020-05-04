console.log("Hello world!", "I am Yann");

const name = "Katsu";
let age = 26;

console.log(`${name} is ${age} years-old.`);

age += 1;
console.log(`${name} is ${age} years-old.`);


const peeps = ['Yun', 'Julien', 'Munekatsu', 'Shogo']

// CRUD

// Create
peeps.push("Grant");
console.log(peeps);

// Read
console.log(peeps[0]);

// Update
peeps[0] = "Super Yun"
console.log(peeps);

// Delete
peeps.splice(2,1)
console.log(peeps);

peeps.forEach((person) => {
  console.log(person.toUpperCase());
});

age = 18;

if (age === 18) {
  console.log('Giri giri okay');
}
else if (age > 18) {
  console.log('You can vote');
}
else {
  console.log('Please get back to your toys.');
}


const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(student);

console.log(student.firstName);

// A function that is squaring a number
const square = (num) => {
  return num * num
};

console.log(square(42));

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.substring(1).toLowerCase();
  return `${firstLetter}${remainder}`;
};


console.log(capitalize("heLlo"));






