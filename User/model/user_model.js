const mongoose=require('mongoose')

//user schema
const user = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true

  },
  createdAt: {
   type: Date,
   default: Date.now
 }
})


module.exports = mongoose.model('user', user)
