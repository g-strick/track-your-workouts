const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// let current_datetime = new Date();

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: new Date().setDate(new Date().getDate())
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        weight: {
          type: Number,
          trim: true
        },
        sets: {
          type: Number,
          trim: true
        },
        reps: {
          type: Number,
          trim: true
        },
        duration: {
          type: Number,
          trim: true,
          required: "Enter duration of exercise"
        },
        distance: {
          type: Number,
          trim: true
        }
      }
    ]
  },
  {
    toJSON: {
      virtual: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const WorkoutModel = mongoose.model("WorkoutModel", workoutSchema);

module.exports = WorkoutModel;
