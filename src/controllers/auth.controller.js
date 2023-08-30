const user = require('../models/user.model')
const bcrypt = require('bcrypt')
const Response  =require('../utils/response')

const login = async (req, res) => {
  console.log(req.body);
  res.json(req.body)
};

const register = async (req, res) => {
  const {email} = req.body;
  const userCheck = await user.findOne({email})
  if(userCheck) { 
    res.json({success:false, message:"Email is already in use"})
  }
  req.body.password = await bcrypt.hash(req.body.password,10)

  const userSave = new user(req.body)
  await userSave.save().then((data) => { 
      return new Response(data , 'Record successfully added').created(res)
  }).catch((err) => { 
    console.log(err);
  })

};

module.exports = { login, register };
