const models = require('../../../models');
const User = require('../../../models/User');

module.exports = async (root, { id, input }, context) => {
  console.log("id ",id,"input",input)
  console.log("typeof ",typeof id)
  console.log(models.users)
  // id = parseInt(id)
  // const index = models.users.findIndex((ite) => ite.id === id);
 
  // console.log("item ",models.users[index],index)
  // models.users[index].firstname = input.firstname
  // models.users[index].lastname = input.lastname

  // return models.users[index]
  let user = await User.findByIdAndUpdate(id,input)
  return user
};
