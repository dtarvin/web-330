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

// start program

// set up singleton object
var DatabaseSingletonTest = (function() {
  var instance;
  function createInstance() {
    var oracleDatabase = new Object("DatabaseTest instance initialized!");
    return oracleDatabase;
  }

  // only create instance of object if an instance is not already created
  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

// try to create two instances of the singleton object
function databaseTestInit() {
  var databaseTestInstance1 = DatabaseSingletonTest.getInstance();
  var databaseTestInstance2 = DatabaseSingletonTest.getInstance();

  // compare if the "two" instances are really the same instance
  console.log("Same database instance? " + (databaseTestInstance1 === databaseTestInstance2));
}

databaseTestInit();

// end program