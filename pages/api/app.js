const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./db/mongoose');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

app.use(passport.initialize());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/user'))

app.listen(3001, () => console.log("Server listening on http://localhost:3001"))