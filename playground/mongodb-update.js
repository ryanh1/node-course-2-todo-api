// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// To spin up a new database, simply give it a name (e.g., TodoApp).  You don't need to create it first before using it.  MongoDB won't create the database until we start adding data.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // return statement prevents the rest from running
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("59ab55f649af98641ecf8e23")
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
  });

  // db.close();
});
