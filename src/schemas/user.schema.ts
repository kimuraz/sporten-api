import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  createdAt: Date,
  updatedAt: Date,
  email: String,
  name: String,
  password: String,
  userType: String,
  trainerId: String,
  isConfirmed: Boolean,
  isActivated: Boolean,
});
