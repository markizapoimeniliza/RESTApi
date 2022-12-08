

const mongoose = require('mongoose')

const followerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    annualSubcription: {
        type: Boolean,
        required: true
    },

    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//name schema
module.exports = mongoose.model('Follower', followerSchema)
