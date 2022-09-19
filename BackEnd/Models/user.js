const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remind = {
  r1: Boolean,
  r2: Boolean,
  r3: Boolean,
  r4: Boolean,
  r5: Boolean,
  r6: Boolean,
  r7: Boolean,
  r8: Boolean,
};

const info = {
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  question7: String
};

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  permission: {
    type: String,
    require: true,
  },
  reminder: [remind],
  healthInfo: [info],
});
const Data = mongoose.model("Users", userSchema);
module.exports = Data;
