const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
// import dbConnect from '../../lib/DbConnect';
require('../../lib/DbConnect');

dbConnect();
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

// allow cors from all - no hustle and never safe
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})

passport.serializeUser(function(user, cb ) {
    cb(null,user);
});

app.use('/auth', require('./routes/auth'));

app.listen(3001,() => console.log("Server listening on http://localhost:3001"))