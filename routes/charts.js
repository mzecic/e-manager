var express = require('express');
var router = express.Router();
const chartsCtrl = require("../controllers/charts");
const isLoggedIn = require("../config/ auth");

router.get("/charts", chartsCtrl.index);

module.exports = router;
