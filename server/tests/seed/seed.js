const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: new ObjectID,
  email: 'andrew@example.com',
  password: 'userOnePass',
  tokens: {
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }
}, {
  _id: new ObjectID,
  email: 'jen@example.com',
  password: 'userTwoPass',
}]


const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};


// This function populates the test database with Users seed data above
const populateUsers = (done) => {
  // Pass in empty object to remove every record
  User.remove({}).then(() => {
    // Then save the two users in the seed data that we created above
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    // Wait for all of the promises to succeed in the array of promises that are passed in - userOne and userTwo.  This will not fire until all of the promises are resolved.  When that happens, we will return these Promise.all result.
    return Promise.all([userOne, userTwo])
    // Then call done to wrap up the middlewear function
  }).then(() => done());
}

module.exports = {todos, populateTodos, users, populateUsers};
