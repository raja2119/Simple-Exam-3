const mongoose = require("mongoose");

// const options = { toJSON: { virtuals: true }, toObject: { virtuals: true } };

const QuestionSetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      // unique: true,
      trim: true,
      maxlength: [50, `Name Can't be more than 50 charecters`],
    },

    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
    ],
  }

  // { options }
);

module.exports = mongoose.model("QuestionSet", QuestionSetSchema);
