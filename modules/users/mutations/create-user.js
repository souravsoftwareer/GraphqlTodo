const models = require('../../../models');
const User = require('../../../models/User');

module.exports = async (root, { input }, context) => {
  console.log(input)
  // models.users.push(input);
  // return models.users
  let user = await User.create({...input})
  return user
};
