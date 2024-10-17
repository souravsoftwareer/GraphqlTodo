const models = require('../../../models');
const User = require('../../../models/User');

module.exports = async (root, { id }, context) => {
  // return models.users.find((item) => item.id === id);
  let user = await User.findOne({ _id:id })
  return user
}
