const Employee = require("../models/employee");

module.exports = {
    create,
    delete: deletePerf,
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

function deletePerf(req, res) {
    Employee.findOne({"performance._id": req.params.id}).then(function(employee) {
        if (!employee) return res.redirect('/employees');
        employee.performance.remove(req.params.id);
        employee.save().then(function() {
        res.redirect(`/employees/${employee._id}`);
    }).catch(function(err) {
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
    })
}
