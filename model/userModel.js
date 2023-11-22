const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);