const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/uploads-todos", { useNewUrlParser: true });

const userSchema = new Schema({
  title: String,
  description: String,
  photo: String,
  status:{type:Boolean, default:false}
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
