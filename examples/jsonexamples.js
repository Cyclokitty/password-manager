// turning objects into JSON and JSON into objects

var person = {
  name: 'Laura',
  age: 45
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObj = JSON.parse(personJSON);

console.log(personObj);
console.log(personObj.name);
console.log(typeof personObj);

console.log('CHALLENGE AREA');

var animal = '{"name": "Clover"}';

// convert to js object
var animalObj = JSON.parse(animal);
console.log(animalObj);

// add age prop
animalObj.age = 2;
console.log(animalObj);
// convert back to json and print to screen
var animalJSON = JSON.stringify(animalObj);
console.log(animalJSON);
