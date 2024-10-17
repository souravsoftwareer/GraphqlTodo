const models = require('../../../models');
const User = require('../../../models/User');

module.exports = async (root, { id }, context) => {
  // const index = models.users.findIndex((item) => item.id === id);
  // return models.users.splice(index, 1);
  let user = await User.deleteOne({ _id:id })
  return user
};
