const db = require('../models');

module.exports = function (app) {

    //get
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });


    //put
    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.findById(req.params.id, (err, book) => {
            var query = { 
                type: req.body.type,
                name: req.body.name,
                distance: req.body.distance,
                duration: req.body.duration,
                weight: req.body.weight,
                sets: req.body.sets,
                reps: req.body.reps
              };   
            res.json(query)
        }) 
    });

    //post //addbutton //
    app.post("/api/workouts", function (req, res) {
        var query = { 
            type: req.body.type,
            name: req.body.name,
            distance: req.body.distance,
            duration: req.body.duration,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps
          };
          console.log(query)

    });

    //get
    app.get("/api/workouts/range", function (req, res) {

        
    });
}