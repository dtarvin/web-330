/*
============================================
; Title:  tarvin-exercise-3.2.js
; Author: David Tarvin
; Date:   08 March 2019
; Description: The Factory Pattern
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 3.2"));
console.log("");

// start program

// create Postgres and set properties
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

// create MySql and set properties
function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7
}

// create Oracle and set properties
function Oracle(properties) {
  this.username = properties.username || "or-admin";
  this.password = properties.password || "or-s3cret";
  this.server = properties.server || "localhost:8101";
  this.version = properties.version || 8.2
}

// create Informix and set properties
function Informix(properties) {
  this.username = properties.username || "in-admin";
  this.password = properties.password || "in-s3cret";
  this.server = properties.server || "localhost:3000";
}

// create DatabaseFactory
function DatabaseFactory() {}

// set default databaseClass
DatabaseFactory.prototype.databaseClass = MySql;

// set up creation of different factories for different objects
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } else if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  } else if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = MySql;
  }

  return new this.databaseClass(properties);
};

// create postgresFactory and its database
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

// create mySqlFactory and its database
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: 'MySQL',
  username: "default",
  password: "password"
});

// create oracleFactory and its database
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: 'Oracle',
  username: "kpossible",
  password: "whatsthesitch"
});

// create informixFactory and its database
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: "rstoppable",
  password: "nakedmolerat"
});

// print out the oracle object
console.log("Oracle {\n   username: '" + oracle.username + "',\n   password: '" + oracle.password + "',\n   server: '" + oracle.server + "',\n   version: '" + oracle.version + "'\n}\n");

// print out the informix object
console.log("Informix {\n   username: '" + informix.username + "',\n   password: '" + informix.password + "',\n   server: '" + informix.server + "'\n}");

// end program


