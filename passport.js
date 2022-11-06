const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('./User');
require("dotenv").config();
const passport = require('passport');
const secret = process.env.SECRETORKEY;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey =secret;

module.exports = passport =>{
    passport.use(
        new JwtStrategy(opts,(jwt_payload,done)=>{
            User.findOne({id:jwt_payload.id})
            .then(user=>{
                if(user){
                    return done(null,user);
                }else{
                    return done(null,false)
                }
            }).catch(err => console.log(err));
        })
    )
}