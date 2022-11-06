var express = require('express');
const router = express.Router();
var jwt = require("jsonwebtoken");
var cors =require("cors");
var bodyParser= require("body-parser");
require("dotenv").config();
var bcrypt = require('bcryptjs');
var app = express();

var validateInputLogin = require('./client/src/error/validateInputLogin');
var validateInputRegister = require('./client/src/error/validateInputRegister');

const User = require('./User');
const secretOrKey = process.env.SECRETORKEY;
console.log(secretOrKey)
 /** Pour post login
  * creation de validation de requete body-parser
  * mise en place de verification du compte par email
  * si email correspond a celle dans le DB on compare le mdp par bcrypt
  * si la comparaison est Vraie( true)
  * alors on crée un payload necessaire au passport-jwt( à faire)
  * le payload sera envoi sous jwt.sign avec un clé et expiration du jeton
  * 
 */

router.post("/login",(req,res)=>{
    const {errors,isValid}= validateInputLogin(req.body);
    console.log(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const {email,password}= req.body;

    User.findOne({email:email}).then(user=>{
        if(!user){
            return res.status(404).json({emailError:"Email not found,Please try again"});
        }

        bcrypt.compare(password,user.password).then(isMatch=>{
            if(isMatch){
                const payload={
                    id:user.id,
                    name:user.name,
                    email:user.email
                };
               
                jwt.sign(
                    payload,
                    secretOrKey,
                    {
                        expiresIn:31556926
                    },
                    (err,token)=>{
                        res.json({
                            success:true,
                            token: 'Bearer'+ token
                        });
                    }
                )
            }else{
                res.status(400).json({passwordIncorrect:"password incorrect" });
            }
        })


    })
    
});

router.post('/register',(req,res)=>{
    const {errors,isValid}= validateInputRegister(req.body);
    if(!isValid){
       return res.status(400).json(errors);
    }
    const {name,email,password} = req.body;

    User.findOne({email:email}).then(user=>{
        if(user){
          return  res.status(400).json({emailExist:"Email has already exists"});
        }else{
         const newUser = new User({
                name:name,
                email:email,
                password:password
         });
            
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then((user)=>res.json(user))
                    .catch((err)=>console.log(err)) 

                })
            })
        }
    })

})
module.exports = router;