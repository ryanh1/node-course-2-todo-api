// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Ryan', age: 27};
var {name} = user;
console.log(name);


// To spin up a new database, simply give it a name (e.g., TodoApp).  You don't need to create it first before using it.  MongoDB won't create the database until we start adding data.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // return statement prevents the rest from running
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  // Insert new doc into Users (name, age, location)

  db.collection('Users').insertOne({
    name: "Ryan Hollander",
    age: "27",
    location: "North Carolina"
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  db.close();
});
