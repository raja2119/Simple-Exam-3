const mongoose = require("mongoose");


// const options = { toJSON: { virtuals: true }, toObject: { virtuals: true } };

const QuestionSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: [true, "Please add a question body"],
      // unique: true,
      trim: true,
      maxlength: [200, `Name Can't be more than 50 charecters`],
    },

    options: {
      type: Array,
      required: true,
    },
    answerId:{
      type:Number,
      required:true
    }
  },
  // { options }
);

module.exports = mongoose.model("Question", QuestionSchema);
