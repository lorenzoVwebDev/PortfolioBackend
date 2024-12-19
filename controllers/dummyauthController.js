const bcrypt = require('bcrypt')
const userDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data}
}

console.log(userDB.users);

const handleLogin = async (req, res) => {
  console.log('hello')
  const { username, pwr } = req.body;
  if (!username || !pwr) return res.status(400).send({"message": "Username or password are required"})
  const userCredentials = userDB.users.find(credentials => credentials.username === username);
  console.log(userCredentials)
  if (!userCredentials?.username) return res.status(401).send({"message": "Username or password are wrong!"});
  const hashedPassword = userCredentials.password;

  if (!hashedPassword) return res.status(500).send({"message": "Sorry, an error has occured, we are going to resolve it as soon as possible!"})

  const match = await bcrypt.compare(pwr, hashedPassword);

  if (!match) return res.status(401).send({"message": "Username or password are wrong!"})

  res.status(200).json({
    token: 'token123',
    message: `User ${userCredentials.username} has logged succesfully!`  
  });
}

module.exports = { handleLogin };