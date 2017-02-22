/**
 * Created by Owner on 2017-02-22.
 */

//express setup
var express = require('express');
var router = express.Router();

//link to the player model for CRUD operations
var Player = require('../models/player');

/* GET players main page */
router.get('/', function (req, res, next) {

    //use mongoose model to query mongodb for all players
    Player.find(function (err, players) {
        if(err) {
            console.log(err);
            res.end(err);
            return;
        }
        // no error so send the players to the players view
        res.render('players', {
            players: players
        });
});
});

//make this file public
module.exports = router;