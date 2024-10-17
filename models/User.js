const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    firstName:{
        type:String,
        default:""
    },
    lastName:{
        type:String,
        default:""
    },
    userName:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },

  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

/**
 * @typedef userSchema
 */
const User = mongoose.model('User', userSchema);

module.exports = User
