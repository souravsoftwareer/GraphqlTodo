const models = require('../../../models');
const User = require('../../../models/User');
module.exports = async (root, args, context) => {
  // return models.users;
  let users = await User.find({})
  return users
};
