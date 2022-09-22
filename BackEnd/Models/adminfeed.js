const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  feedtopic: {
    type: String,
    require: true,
  },
  feedbody: {
    type: String,
    require: true,
  },
});
const Data = mongoose.model("Feed", feedSchema);
module.exports = Data;
