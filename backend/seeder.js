const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//Loading env vars
dotenv.config({ path: "./config/config.env" });

//Load models
const Question = require("./models/Question");
const QuestionSet = require("./models/QuestionSet");
const User = require("./models/User");

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//Read json files

const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/questions.json`, "utf-8")
);
const questionSets = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/question-sets.json`, "utf-8")
);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);

//Import into DB
const importData = async () => {
  try {
    await Question.create(questions);
    await QuestionSet.create(questionSets);
    await User.create(users);
    console.log("Exam Data Created".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Delete from DB
const deleteData = async () => {
  try {
    await Question.deleteMany();
    await QuestionSet.deleteMany();
    await User.deleteMany();
    console.log("Exam Data Deleted".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
