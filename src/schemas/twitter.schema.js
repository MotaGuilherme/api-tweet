const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const Twitter = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    tweet: {
        type: String,
        require: true
    }
});

const TwitterSchema = Mongoose.model('twitter', Twitter, 'twitters');

module.exports = TwitterSchema;