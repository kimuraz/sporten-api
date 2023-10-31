import * as mongoose from 'mongoose';

export const WorkoutSchema = new mongoose.Schema({
  name: String,
  description: String,
  exerciseType: String,
  defaultWeight: Number,
  goalReps: Number,
});

export const ResultSchema = new mongoose.Schema({
  exerciseId: String,
  weight: Number,
  reps: Number,
});

export const SetSchema = new mongoose.Schema({
  order: Number,
  exercises: [WorkoutSchema],
  results: [ResultSchema],
});

export const TrainingSchema = new mongoose.Schema({
  date: Date,
  sets: [SetSchema],
});

export const TrainingScheduleSchema = new mongoose.Schema({
  trainerId: String,
  userId: String,
  dateFrom: Date,
  dateTo: Date,
  title: String,
  description: String,
});
