var mongoose = require('mongoose');
var Note = mongoose.model('Note');


module.exports = {
  show: function(req, res) {
    Note.find({}).sort('-createdAt').exec(function(err, notes) {
      console.log(notes);
      res.json(notes);
    })
  },

  create: function(req, res) {
    console.log(req);
    var note = new Note({note: req.body.note});
    note.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        console.log('THE NOTE HAS ENTERED THE DATABASE AS', note);
        res.redirect('/notes');
      }
    })
  }
}