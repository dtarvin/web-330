/*
============================================
; Title:  tarvin-exercise-1.4.js
; Author: David Tarvin
; Date:   22 February 2019
; Description: Duck Typing, A.K.A "Interfaces"
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 1.4"));
console.log("");

function Car(model) {
    this.model = model;
}

Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
};

function Truck(model, year) {
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
};

function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
};

var car = new Car("Camaro");
var truck = new Truck("Ram 1500", "2018");
var jeep = new Jeep("Renegade", "2019", "red");

var racetrack = [];

function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

driveIt(car);
driveIt(truck);
driveIt(jeep);

// Display racetrack
console.log("\n-- The following vehicles have been added to the racetrack --");
for (var k = 0; k < racetrack.length; k++) {
    console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
}
