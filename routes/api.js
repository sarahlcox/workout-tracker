const router = require("express").Router();
const Workouts = require("../models/workout.js");

// adds exercises to previous workout plan
router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/addExercise/:id", (req, res) => {
// tell the db that we want to get the workout of the id (req.params.id or req.id? rec.body.id?) and then add to its exercises what we have in req.body
    Workouts.find({})
    // ^^ in find we need to tell it what to find in the {id:req.body.id}
    .then(response => {
    // want to take this response and parse it into the workouts object (ex.... workout.exercises.push/add(req.body)
    })
    .catch(err => {
    res.status(400).json(err);
    });
    console.log(req.body);
  });


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
