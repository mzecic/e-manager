var express = require('express');
var router = express.Router();
const employeeCtrl = require("../controllers/employees");
const isLoggedIn = require("../config/ auth");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/new", isLoggedIn, employeeCtrl.new);
router.get("/:id", isLoggedIn, employeeCtrl.show);
router.post("/", employeeCtrl.create);
router.delete("/:id", employeeCtrl.delete);
router.get("/:id/edit", isLoggedIn, employeeCtrl.edit);
router.put("/:id", isLoggedIn, employeeCtrl.update);

module.exports = router;
