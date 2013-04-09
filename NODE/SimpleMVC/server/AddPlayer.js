/**
 * Run this example with node to see how mongoose connects to MongoDB
 *
 * Prerequisites:
 * - Mongod running
 * - node module mongoose installed (npm install mongoose)
 * @type {*}
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simplemvc');

var SoccerPlayer = mongoose.model('SoccerPlayer', { name: String, club: String, playerNumber: Number, isSuspended: Boolean });

var rody = new SoccerPlayer({ name: 'Rody', club: 'ICA', playerNumber: 7, isSuspended: false });
rody.save(function (err) {
  console.log('done');
});
