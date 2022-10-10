var express = require('express');
var router = express.Router();
const employeeCtrl = require("../controllers/employees");
const isLoggedIn = require("../config/ auth");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/:id", isLoggedIn, employeeCtrl.show);

module.exports = router;
