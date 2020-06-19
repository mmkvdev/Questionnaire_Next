const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { Strategy } = require('passport-github');
const users = require('../db/services/user');
const JWT_KEY = "nextjs_authentication"
const router = express();

passport.use(new Strategy({
  clientID: "22a3b7ecd6b30f58b9d0",
  clientSecret: "f0985fc0885fca906a07f944d4a427be4eb7cadf",
  callbackURL: "http://localhost:3001/auth/github/callback"
},

  function (accessToken, refreshToken, profile, cb) {
    users.findOrCreate(profile);
    return cb(null, profile);
  }
));

router.get('/github', (req, res, next) => {
  const { redirectTo } = req.query;
  const state = JSON.stringify({ redirectTo });
  const authenticator = passport.authenticate('github', { scope: [], state, session: true });
  authenticator(req, res, next);
}, (req, res, next) => {
  next();
});

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }), (req, res, next) => {
    const token = jwt.sign({ id: req.user.id }, JWT_KEY, { expiresIn: 60 * 60 * 24 * 1000 })
    req.logIn(req.user, function (err) {
      if (err) return next(err);;
      res.redirect(`http://localhost:3000?token=${token}`)
    });

  },
);
module.exports = router;