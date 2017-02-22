/**
 * Created by Owner on 2017-02-22.
 */

//reference mongoose
var mongoose = require('mongoose');

//create player schema (class)
var playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First Name is required'
    },
    lastName: {
        type: String,
        required: 'Last Name is required'
    },
    number: {
        type: Number,
        required: 'Number is required'
    }
});

// make it public
module.exports = mongoose.model('Player', playerSchema);