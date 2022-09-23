const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const info = {
  sender: String,
  mes: String,
};

const messangerSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  message: [info],
});
const Data = mongoose.model("Messages", messangerSchema);
module.exports = Data;
