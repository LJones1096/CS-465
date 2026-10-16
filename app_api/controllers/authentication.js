const mongoose = require('mongoose');
const User = mongoose.model('User');

// Register a new user
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({
      message: 'All fields are required.'
    });
  }

  try {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    await user.save();

    const token = user.generateJwt();

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(400).json({
      message: 'Unable to register user.'
    });
  }
};

// Log in an existing user
const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: 'Email and password are required.'
    });
  }

  try {
    const user = await User.findOne({
      email: req.body.email
    });

    if (!user || !user.validPassword(req.body.password)) {
      return res.status(401).json({
        message: 'Invalid email or password.'
      });
    }

    const token = user.generateJwt();

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({
      message: 'An error occurred during login.'
    });
  }
};

module.exports = {
  register,
  login
};