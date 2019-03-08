/*
============================================
; Title:  tarvin-exercise-3.3.js
; Author: David Tarvin
; Date:   08 March 2019
; Description: The Singleton Pattern
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 3.3"));
console.log("");

var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

// create two apparent instances of the object
function DatabaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  // see if "both instances" are in fact the same instance of the object
  console.log("Same database instance? " + (oracle === postgres));
}

DatabaseSingletonTest();