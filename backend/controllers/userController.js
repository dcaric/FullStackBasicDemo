const userService = require('../services/userService');

exports.getUsers = (req, res) => {
  userService.getAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createUser = (req, res) => {
  userService.createUser(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({ error: err.message }));
};
