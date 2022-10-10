var express = require('express');
var router = express.Router();
const performanceCtrl = require("../controllers/performances");
const isLoggedIn = require("../config/ auth");

router.post("/employees/:id/performances", isLoggedIn, performanceCtrl.create);






module.exports = router;
