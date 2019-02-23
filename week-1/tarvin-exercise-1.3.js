/*
============================================
; Title:  tarvin-exercise-1.3.js
; Author: David Tarvin
; Date:   22 February 2019
; Description: class refresher
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 1.3"));
console.log("");

function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.getPrice = function() {
    return this.price;
  }

  this.getModel = function() {
    return this.model;
  }

  this.getDetails = function() {
    console.log("-- DISPLAYING CELL PHONE DETAILS --");
    console.log("Manufacturer: " + this.manufacturer);
    console.log("Model: " + this.getModel());
    console.log("Color: " + this.color);
    console.log("Price: " + this.getPrice());
  }
}

var iPhone = new CellPhone("Apple", "iPhone XR", "Space Gray", "$799.99");

iPhone.getDetails();

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program





// end program