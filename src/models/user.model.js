import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: true,
    required: [true, "Password is required"],
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
