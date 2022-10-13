const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chartSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    salaryRange: [],
    departments: [],
}, {
    timestamps: true
})

module.exports = mongoose.model('Chart', chartSchema);
