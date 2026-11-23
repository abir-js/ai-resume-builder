import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required"],
    },
  },
  { timestamps: true },
);

const BlacklistTokenModel = mongoose.model("BlacklistToken", blacklistTokenSchema);

export default BlacklistTokenModel;
