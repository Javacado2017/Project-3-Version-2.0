// CREATING ROUTERS TO PASS DATA FROM SERVER TO CLIENT

// DEPENDENCIES
const express = require("express");
const router = new express.Router();

// DASHBOARD
router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "You"re authorized to see this secret message.",

    user: req.user
  });
});


// CHARTS
// ARTICLES
// CRYPTOAPI
// NEWSAPI


// NOTES
router.get("/notes/:id", (req, res) => {
  var userID = req.params.id;
  Note.find({ userID: userID }, function(err, notes) {
      if (err) return console.error(err);
      res.status(200).json(notes);
  });
});
  
router.post("/notes", (req, res) => {
  var submission = new Note({
    userID: req.body.userID,
    note: req.body.note
  });

  submission.save(function(err, data) {
    if (err) return console.error(err);
    console.log(data);
  });
});

  
module.exports = router;
