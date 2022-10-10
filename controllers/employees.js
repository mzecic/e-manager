const Employee = require("../models/employee");

module.exports = {
    index,
    show
}

function index(req, res) {
    Employee.find({}, function(err, employees) {
        res.render("employees/index", {
            title: "Employees",
            employees
        });
    })

}

function show(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        res.render("employees/show", {
            employee, title: `${employee.firstName} ${employee.middleName} ${employee.lastName}`
        });
    })

}
