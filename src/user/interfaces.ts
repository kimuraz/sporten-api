import { Document } from 'mongoose';

export interface User extends Document {
  _id?: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string;
  password: string;
  userType: string;
  trainerId: string;
  isConfirmed: boolean;
  isActivated: boolean;
}
