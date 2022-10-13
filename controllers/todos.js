const Todo = require("../models/todo");

module.exports = {
    index,
    create,
    delete: deleteTodo,
}


function create(req, res) {
    const todo = new Todo(req.body);
    todo.save(function(err) {
        if (err) {
            console.log(err)
            return res.redirect('/');
        }
        res.redirect(`/`);
    })
}

function index(req, res) {
    Todo.find({}, function(err, todos) {
        res.render("index", {
            todos,
            title: "e-manager"
        })
    })
}

function deleteTodo(req, res) {
    Todo.findByIdAndDelete(req.params.id, function(err, todo) {
        if (err) return res.status(500).send(err);
        res.redirect("/")
    })
}
