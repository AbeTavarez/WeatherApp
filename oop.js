

function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(`${this.name.first} {this.name.last} is ${this.age} years old. He likes ${this.interests} and ${this.interests[1]}.`);
    };
    this.greeting = function() {
        console.log(`Hi I am ${this.name.first}.`);
    }
}

let captain = new Person(`Erwin`, `Smith`, 35, `male`, [`reading books`, `slaying titans`]);

console.log(captain['age']);
console.log(captain.interests[0]);
console.log(captain.interests[1]);

// console.log(captain.valueOf())

let levi = Object.create(Person);
console.log(levi.__proto__);
