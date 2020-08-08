
const passport = require("passport");
const jsonwebtoken = require("jsonwebtoken")
const Strategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const models = require("../models")
const express = require("express");
const app = express();

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


class authController {

static async login(req, res) {

const { body } = req;

try {

    const user = await models.user.findOne({
        where: {
          username: body.username,
          password: body.password
        }
      })
    
      const token = jsonwebtoken.sign(user.username, opts.secretOrKey);
    
      res.json({
        status: "Success",
        token
      })
      
    
} catch (error) {
res.json("Data ga cocok, coba cek lagi biar bisa generate token")
}

  



    }

//ini buat tes get user aja

//     static async user(req, res) {

//         passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     models.user.findOne({
//         where: {
//             username: jwt_payload
//         }
//     })
//     .then((data) => {
//         const user = data;
//         return done(null, user)
//     })
//     .catch((err) => { return done(err, false) })
// }));

// passport.serializeUser(function(user, cb) {
//     cb(null, user.id);
// });
  
// passport.deserializeUser(function(id, cb) {
//     models.user.findByPk(id, function (err, user) {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });
//         res.json("hallo")
//     }



}

module.exports = authController;