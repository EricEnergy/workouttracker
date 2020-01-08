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
        db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}) 
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //post //addbutton //
    app.post("/api/workouts", function (req, res) {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //get
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
        .populate("workouts")
        .then(dbWorkout => {
            res.send(dbWorkout);
        })
        .catch(err => {
            res.send(err);
        });
        
    });
}