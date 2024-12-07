import mongoose from "mongoose";

// An interface that descripes the props required to create new User
interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the props User model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc
}

// single
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    requires: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
