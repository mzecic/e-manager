const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
    qualityOfWork: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    },
    reliability: {
        type: String,
        required: true
    },
    communicationSkills: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    date: Date,
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    startTime: {
        type: String,

    },
    endTime: {
        type: String,

    },
    salary: {
        type: String,
        required: true
    },
    performance: [performanceSchema]
}, {
    timestamps: true
})


module.exports = mongoose.model('Employee', employeeSchema);
