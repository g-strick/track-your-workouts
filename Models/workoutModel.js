const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: new Date()
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

      // totalSets: {
      //   type: Number,
      //   trim: true
      // },
      // totalReps: {
      //   type: Number,
      //   trim: true
      // },
      // totalDistance: {
      //   type: Number,
      //   trim: true
      // }
    }
  ]
});

const WorkoutModel = mongoose.model("WorkoutModel", workoutSchema);

module.exports = WorkoutModel;
