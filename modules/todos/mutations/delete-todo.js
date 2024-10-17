const models = require('../../../models');
const ToDo = require('../../../models/ToDo');

module.exports = async (root, { id }, context) => {
  // const index = models.todos.findIndex((item) => item.id === id);
  // return models.todos.splice(index, 1);
  let deleteTodo = await ToDo.deleteOne({ _id:id })
  return deleteTodo
};
