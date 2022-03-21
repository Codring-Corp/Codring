const mongoose = require('mongoose')

const rewardsSchema = new mongoose.Schema({
    rewardTitle: String,
    rewardPoints: Number,
    isRewardCycled: Boolean,
    rewardCycle: Number
}, {timestamps: true})


module.exports = mongoose.model('rewards', rewardsSchema)
