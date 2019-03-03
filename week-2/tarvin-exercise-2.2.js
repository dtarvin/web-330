/*
============================================
; Title:  tarvin-exercise-2.2.js
; Author: David Tarvin
; Date:   28 February 2019
; Description: Prototypes
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 2.2"));
console.log("");

var person = {
  getAge: function() {
    return this.age;
  }
}

var david = Object.create(person, {
  "age":
  {
    "value": "49"
  },
  "fullname":
  {
    "value": "David Tarvin"
  }
});

david.getAge();

console.log("The person's full name is", david.fullname);
console.log("The person's age is", david.getAge());
