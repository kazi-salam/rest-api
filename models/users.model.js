const { v4: uuidv4 } = require('uuid');
const users = [
  {
    id: uuidv4(),
    username: 'Kazi Salam',
    email: 'kzkzkzkz@gmail.com'
  },
  {
    id: uuidv4(),
    username: 'Jahir Alam',
    email: 'kzkzkzkz@gmail.com'
  }
];
module.exports = users;
