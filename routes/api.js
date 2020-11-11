const router = require("express").Router();
const Workouts = require("../models/workout.js");

// adds exercises to previous workout plan
router.post("/api/workouts/", ({ body }, res) => {
  Workouts.create(body)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//adds new exercises to a new workout plan


// View the combined weight of multiple exercises on stats page
router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
