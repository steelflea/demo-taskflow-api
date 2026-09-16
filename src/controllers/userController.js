const { users } = require('../config/db');

function listUsers(req, res) {
  res.json({ data: Array.from(users.values()) });
}

function getUser(req, res) {
  const user = users.get(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'user not found' });
  }
  res.json({ data: user });
}

module.exports = { listUsers, getUser };
