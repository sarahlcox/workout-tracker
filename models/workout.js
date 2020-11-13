const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date, 
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      duration: {
        type: Number,
        required: "Enter exercise duration",
      },
      weight: {
        type: Number,
        required: "Enter weight of resistance",
      },
      reps: {
        type: Number,
        required: "Enter amount of reps",
      },
      sets:  {
        type: Number,
        required: "Enter amount of sets",
      },
      distance:  {
        type: Number,
        required: "Enter distance of exercise",
      }
    }
  ]
},
{
  toJSON:{
    virtuals: true
  }
});


// add virtual for duration
workoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((sum,exercise)=>{
    return sum + exercise.duration
  },0)
  // return this.exercises[0].duration;
});

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;