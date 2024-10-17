const models = require('../../../models');
const ToDo = require('../../../models/ToDo');

module.exports = async (root, { input }, context) => {
  // return models.todos.push({ ...input });
  let todo = new ToDo({ ...input })
  await todo.save()
  console.log("input ",input)
  return input
};
