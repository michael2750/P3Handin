var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({
  name: { type: String, min: 3, max: 100, required: true }, //reference to the associated genre
});

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);