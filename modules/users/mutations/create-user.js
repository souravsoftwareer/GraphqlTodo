const models = require('../../../models');

module.exports = async (root, { input }, context) => {
  console.log(input)
  models.users.push(input);
  return models.users
};
