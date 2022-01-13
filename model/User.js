const mongoose = require('mongoose');
const Joi = require('joi')

const UserSchema = new mongoose.Schema({
     // id: Date.now(),
     first_name: {
          type:String,
          required: [true, 'Please add a first_name']
     },
     last_name:{
          type: String,
          required: [true, 'Please add a first_name']
     },
     date: {
          type: Date, 
          default: Date.now
     },
     email: {
          type: String,
          match: [
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'Please add a valid email',
          ]},
     password: {
          type: String,
          required: [true, 'Please password required'],
     }
},
{
     timestamps: true
});

function validateUser(user) {
     const schema = Joi.object({
       first_name: Joi.string().min(3).max(25).required(),
       last_name: Joi.string().min(3).max(25).required(),
       email: Joi.string().min(3).required(),
       password: Joi.string().min(3).max(255).required(),
     });
     return Joi.validate(user,schema);
   }

module.exports = mongoose.model('User', UserSchema);