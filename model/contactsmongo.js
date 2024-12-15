const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: String,
  requestedId: String
});

module.exports = mongoose.model('Contact', contactsSchema)