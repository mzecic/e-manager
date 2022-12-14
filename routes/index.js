var express = require('express');
var router = express.Router();
// const fetch = require('node-fetch');
const passport = require("passport");
const employeeCtrl = require("../controllers/employees")
const todoCtrl = require("../controllers/todos");
const isLoggedIn = require("../config/ auth")
/* GET home page. */

router.get("/", todoCtrl.index);
router.get('/employees', isLoggedIn, employeeCtrl.index)
router.post("/todos", isLoggedIn, todoCtrl.create);
router.delete("/todos/:id", isLoggedIn, todoCtrl.delete);
// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if(err) return next(err)
    res.redirect('/')
  })
})



module.exports = router;
