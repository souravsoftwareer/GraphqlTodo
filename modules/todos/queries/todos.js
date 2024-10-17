const models = require('../../../models');
const ToDo = require('../../../models/ToDo');

module.exports = async (root, args, context) => {
  return await ToDo.find({})
};
