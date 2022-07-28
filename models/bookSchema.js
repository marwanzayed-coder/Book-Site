import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  name: "",
  writer: "",
});

export default mongoose.model("Book", bookSchema);
