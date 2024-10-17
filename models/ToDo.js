const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const toDoSchema = mongoose.Schema(
  {
    title:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    isCompleted:{
        type:Boolean,
        default:false
    },

  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
toDoSchema.plugin(toJSON);

/**
 * @typedef ToDo
 */
const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo
