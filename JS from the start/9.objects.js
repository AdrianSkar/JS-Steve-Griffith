/*jshint esversion: 6*/

const dog = {
  'name': "Woody",
  'type': "dog"
};
const cat = {
  'name': "Bob",
  'type': "cat"
};
console.log(dog);

const petNames = ["Woody", "Bob"];

const pets = [dog, cat];

//Add a new pet; object literal
pets.push({ 'name': 'Roxy', 'type': 'dog' });
console.log(pets[2]); //pets sub 2

//Add properties
cat.age = 2;
dog['age'] = 14;
console.log(pets);

pets[0].age = 14;
pets[2]['age'] = 6;
console.log(pets);


pets[1].age = 3;
pets[1].hungry = true;
console.log(pets);










