var express = require('express');
var router = express.Router();


router.get("/departments", function(req, res, next) {
    res.render("departments/index", {
        title: "Coming Soon!"
    })
});


module.exports = router;
