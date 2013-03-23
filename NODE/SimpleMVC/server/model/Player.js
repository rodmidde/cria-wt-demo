var mongoose = require('mongoose');

var Player = function (name, club, playerNumber) {
    this.name = name;
    this.club = club;
    this.playerNumber = playerNumber;
    this.isSuspended = false;

    this.PlayerModel = mongoose.model('SoccerPlayer', this.soccerPlayerSchema);
    this.entity = new this.PlayerModel({name: name, club: club, playerNumber: playerNumber, isSuspended: false});
}

Player.prototype = {
    constructor: Player,
    soccerPlayerSchema: mongoose.Schema({
        name: String,
        club: String,
        playerNumber: Number,
        isSuspended: Boolean}),
    save: function (db) {
        this.entity.save(db);
    },
    toJSON: function () {
        return entity.toJSON();
    }
}

module.exports = Player;
