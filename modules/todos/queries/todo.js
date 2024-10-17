const models = require('../../../models');
const ToDo = require('../../../models/ToDo');

module.exports = async (root, { id }, context) => {
  // return models.todos.find((item) => item.id === id);
  let todo = await ToDo.findOne({ _id:id })
  return todo
};
