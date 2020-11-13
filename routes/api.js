const router = require("express").Router();
const Workouts = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  console.log("hello!");
  // finds all documents from our db
  Workouts.find({})
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// adds exercises to previous workout plan
router.post("/api/workouts", ({ body }, res) => {
  console.log(body);
  Workouts.create(body)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
// tell the db that we want to get the workout of the id (req.params.id or req.id? rec.body.id?) and then add to its exercises what we have in req.body
  Workouts.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}})
// ^^ in find we need to tell it what to find in the {id:req.body.id}
  .then(response => {
  console.log(response);
  res.json(response);
// want to take this response and parse it into the workouts object (ex.... workout.exercises.push/add(req.body), and then update to the db
  })
  .catch(err => {
  res.status(400).json(err);
  });
// console.log(req.body);
});


// View the combined weight of multiple exercises on stats page
router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
