const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const info = {
  date: String,
  time: String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  question7: String,
  state: String,
  avg: String,
  day:String
};

const questionSchema = new Schema({
  email: {
    type: String,
        require: true,
    unique: true
  },
  todayPlan: [info],
});
const Data = mongoose.model("DayStarts", questionSchema);
module.exports = Data;
