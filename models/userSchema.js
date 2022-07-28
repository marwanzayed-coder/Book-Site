import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});

export default mongoose.model("User", userSchema);
