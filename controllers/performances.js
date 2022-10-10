const Employee = require("../models/employee");

module.exports = {
    create,
}

function create(req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        employee.performance.push(req.body)
        employee.save(function(err) {
            res.redirect(`/employees/${employee._id}`)
        })
    })
}
