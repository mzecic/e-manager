const Chart = require("../models/chart");
const Employee = require("../models/employee");

module.exports = {
    index
}

function index(req, res) {
   Employee.find({}, function(err, employees) {
    res.render("charts/index", {
        employees,
        title: "Charts"
    })
   })
}
