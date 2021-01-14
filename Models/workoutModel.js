const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      totalDuration: {
        type: Number,
        trim: true,
        required: "Enter duration of exercise"
      },
      numExercises: {
        type: Number,
        trim: true
      },
      totalWeight: {
        type: Number,
        trim: true
      },
      totalSets: {
        type: Number,
        trim: true
      },
      totalReps: {
        type: Number,
        trim: true
      },
      totalDistance: {
        type: Number,
        trim: true
      },
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      exerciseName: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
      }
    }
  ]
});

const WorkoutModel = mongoose.model("WorkoutModel", workoutSchema);

module.exports = WorkoutModel;
