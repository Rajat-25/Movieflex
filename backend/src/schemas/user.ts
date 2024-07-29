import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    min: 2,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    min: 3,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    min: 6,
  },
});

const User = model('user', userSchema);

export default User;
