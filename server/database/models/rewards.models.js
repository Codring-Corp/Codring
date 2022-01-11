const mongoose = require('mongoose')

const rewardsSchema = new mongoose.Schema({
    rewardTitle: {
        type: String,
        require: true
    },
    rewardPoints: {
        type: Number,
        require: true
    },
    isRewardCycled: {
        type: Boolean,
        require: true
    },
    rewardCycle: {
        type: Number
    },
}, {timestamps: true})


module.exports = mongoose.model('rewards', rewardsSchema)
