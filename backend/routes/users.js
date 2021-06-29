const express = require("express");

//importing controller functions
const { loginUser, getUsers, createUser } = require("../controllers/users");

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router
  .route("/login")
  .post(loginUser)

module.exports = router;
