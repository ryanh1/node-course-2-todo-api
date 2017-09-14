var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb:localhost:27017/TodoApp')

// mongoose.connect('', {
//   useMongoClient: true,
// });

module.exports = {mongoose};
