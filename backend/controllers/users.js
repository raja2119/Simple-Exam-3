const errorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const asyncHandler = require("../middleware/async");

//  @desc       get all users
//  @route      GET /api/v1/users
//  @access     Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

//  @desc       login
//  @route      POST /api/v1/user/login
//  @access     Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if(!req.body.email && !req.body.password){
    return res.status(200).json({
      success: false,
      message: `Write username and pass`,
    });
  }
  if (!user) {
    return res.status(200).json({
      success: false,
      message: `No user with this email...register`,
    });
  }
  if (user.password !== req.body.password) {
      console.log(user.password,req.body.password);
      return res.status(200).json({
        success: false,
        message: `The password is wrong`,
      });
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

//  @desc       Create a user
//  @route      POST /api/v1/users/
//  @access     Public
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});
