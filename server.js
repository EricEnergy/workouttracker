const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;



const app = express();
// const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


// db.Workout.create({ name: "Fitness tracker" })
//     .then(Workout => {
//         console.log(Workout);
//     })
//     .catch(({ message }) => {
//         console.log(message);
//     });

// app.get("/notes", (req, res) => {
//     db.Note.find({})
//         .then(dbNote => {
//             res.json(dbNote);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// app.get("/user", (req, res) => {
//     db.User.find({})
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// app.post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//         .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// app.get("/populateduser", (req, res) => {
//     db.User.find({})
//         .populate("notes")
//         .then(dbUser => {
//             res.send(dbUser);
//         })
//         .catch(err => {
//             res.send(err);
//         });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
