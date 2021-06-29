const errorResponse = require("../utils/errorResponse");
const QuestionSet = require("../models/QuestionSet");
const asyncHandler = require("../middleware/async");

//  @desc       get all questionsets
//  @route      GET /api/v1/question-sets
//  @access     Public
exports.getQuestionSets = asyncHandler(async (req, res, next) => {

    const questionSets = await QuestionSet.find().populate("questions")
  

  res.status(200).json({
    success: true,
    count: questionSets.length,
    data: questionSets
  });
});

//  @desc       get all questionsets
//  @route      GET /api/v1/question-sets/:id
//  @access     Public
exports.getQuestionSetsQuestion = asyncHandler(async (req, res, next) => {
    try {
      const questionSets = await QuestionSet.findById(req.params.id).populate("questions");
      return res.status(200).json({
        success: true,
        count: questionSets.questions.length,
        data: questionSets.questions
      });
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        success: false,
        message:`No question sets with id ${req.params.id}`
      });
    }
  


});
