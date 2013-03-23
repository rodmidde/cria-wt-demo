var Player = require('../model/Player.js');

/**
 * Class that abstracts the database
 * @constructor
 */
function EntityManager() {
    var mongoose = require('mongoose');
    mongoose.connect('localhost', 'simplemvc');

    /**
     * Saves a player to the underlying DBMS
     * @param name
     * @param club
     * @param playerNumber
     * @param saveReadyFunction
     */
    this.saveNewPlayer = function (name, club, playerNumber, saveReadyFunction) {
        var playerToSave = new Player(name, club, playerNumber);

        // The save method requires a callback method
        playerToSave.save(function (err, playerToSave) {
            if (!err) {
                console.log("Saved: " + playerToSave);
                saveReadyFunction();
            }
        });
    }
}

module.exports = EntityManager;
