const Employee = require("../models/employee");

module.exports = {
    index,
    show,
    new: newEmployee,
    create,
    delete: deleteEmployee,
    edit: editEmployee,
    update
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

function newEmployee(req, res) {
    res.render("employees/new", {
        title: "Add a new Employee"
    });
}

function create(req, res) {
    req.body.salary = "$" + req.body.salary;
    const employee = new Employee(req.body);
    employee.save(function(err) {
        if (err) {
            console.log(err)
            return res.redirect('/employees/new');
        }
        res.redirect(`/employees/${employee._id}`);
    })
}

function deleteEmployee(req, res, next) {
    Employee.findByIdAndRemove(req.params.id, function(err, employee) {
        if (err) return res.status(500).send(err);
        res.redirect("/employees")
    })
}

function editEmployee(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        res.render("employees/edit", {
            employee, title: `${employee.firstName} ${employee.middleName} ${employee.lastName}`
        });
    })
}

function update(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        req.body.salary = "$" + req.body.salary;
        employee.updateOne(req.body, function(err) {
            if (err) {
                console.log(err)
                return res.redirect(`/employees/${employee._id}/edit`);
            }
            res.redirect(`/employees/${employee._id}`);
        })
    })
}
