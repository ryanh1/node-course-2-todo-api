const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const nodemon = require('nodemon');

// Todo.remove({}).then( (result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndremove('59abef1250dbcffefdf64a7a').then((todo) => {
  console.log(todo);
});
