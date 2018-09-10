// const myObj1 = {
//   car: 'Lambo',
// };

// const myObj3 = {
//   name: 'Amie',
//   age: 25,
//   favLanguage: 'Rails',
// };

// Object.assign(myObj1, myObj3);
// console.log(myObj1);

// const myObj3 = {
//   name: 'Amie',
//   age: 25,
//   favLanguage: 'Rails',
//   sport: 'soccer',
// };
// const myObj = Object.getOwnPropertyDescriptors(myObj3);
//console.log(Object.entries(myObj3));

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person.prototype.setOlder = function() {
//   this.age += 1;
// };
// Person.prototype.getAge = function() {
//   return this.age;
// };

Person.prototype.sayName = function() {
  return this.name;
};

const viola = new Person('장보라', 25);
const chan = new Person('강찬', 31);

console.log(viola.sayName());
