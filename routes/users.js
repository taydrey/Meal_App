const authmd = require('../middleware/authmd');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/user');

// All Api Calls for Users Module
 router.get('/me', authmd, async (req, res, next) => {

   try {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
   } catch (ex) {
     next(ex);
   } 
});


/* post */
router.post('/', async (req, res, next) => {
  
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registerd.');

    user = new User(_.pick(req.body, ['username', 'email', 'password', 'isAdmin']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
       
    res.status(200).send('User registered');
    
  } catch (ex) {
    next(ex);
  } 
});

module.exports = router;