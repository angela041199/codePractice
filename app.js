// let Person = {
//   name: "Bruce",
//   age: 26,
//   sayHi() {
//     console.log(this.name + "你好");
//   },
// };

// Person.sayHi();

function Person2(name, age, pet, job) {
  this.name = name;
  this.age = age;
  this.pet = pet;
  this.job = job;
}

Person2.prototype.Hi = function () {
  console.log(this.name + " hi!");
};
Person2.prototype.Bye = function () {
  if (this.age > 30) {
    console.log(this.age + "太老了");
  } else console.log(this.age + "剛好喔");
};

let bruce = new Person2("Bruce", 32, "阿肥", "engineer");
let angela = new Person2("Angela", 30, "Bruce", "jobless");
// console.log(bruce, angela);
// bruce.Hi();
// bruce.Bye();
// angela.Bye();

let cat = {
  name: "Kitten",
  gender: "male",
};
function Grow(city) {
  console.log(this.name + "來自" + city);
  return this.name;
}
Grow.call(cat, "HsinChu");
