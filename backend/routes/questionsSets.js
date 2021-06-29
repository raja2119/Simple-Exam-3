const express = require("express");

//importing controller functions
const { getQuestionSets, getQuestionSetsQuestion } = require("../controllers/questionSets");

const router = express.Router();

router.route("/").get(getQuestionSets);
router.route("/:id").get(getQuestionSetsQuestion);
module.exports = router;
