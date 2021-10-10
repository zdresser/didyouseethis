import mongoose from "mongoose";

interface IUser {
  username: string;
  email: string;
}

interface UserModelInterface extends mongoose.Model<any> {
  build(attr: IUser): UserDoc;
}

interface UserDoc extends mongoose.Document {
  username: string;
  description: string;
}
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};

const User = mongoose.model<UserDoc, UserModelInterface>("User", userSchema);

export { User };
