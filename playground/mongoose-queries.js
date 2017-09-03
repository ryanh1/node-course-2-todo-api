const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const nodemon = require('nodemon');

var id = '59abef1250dbcffefdf64a7a';
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

// User tests

User.findById('59abb4f7a1cb9f70498af47c').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User by Id: ',JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
