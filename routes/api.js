const router = require("express").Router();
const WorkoutModel = require("../models/workoutModel.js");

router.post("/api/workouts", (req, res) => {
  WorkoutModel.create({})
    .then((dbWorkoutModel) => {
      res.json(dbWorkoutModel);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  WorkoutModel.find({})
    // .sort({ date: -1 })
    .then((dbWorkoutModel) => {
      res.json(dbWorkoutModel);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  WorkoutModel.find({})
    // .sort({ date: -1 })
    .then((dbWorkoutModel) => {
      res.json(dbWorkoutModel);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("body:", body);
  console.log("params:", params);
  WorkoutModel.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: body
      }
    },
    {
      new: true,
      runValidators: true
    }
  )
    .then((dbWorkoutModel) => {
      res.json(dbWorkoutModel);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
