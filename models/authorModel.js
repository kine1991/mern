const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Author schema
const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author can not be empty!']
  },
  born: String,
  died: String,
  imageUrl: String,
  about: String
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
