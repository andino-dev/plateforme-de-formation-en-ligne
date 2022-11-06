var express = require('express')
var cors =require("cors");
var bodyParser= require("body-parser");
var mongoose = require ("mongoose");
var dotenv = require("dotenv");
var  passport = require('passport');
var app = express();
var users = require('./users');
const User = require('./User');

dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use("/api/users/",users);
app.use(passport.initialize());

//passport config
require('./passport')(passport);
                /* Login system*/

                 /* Login system*/
const dbUrl = process.env.MONGODB_URI;
const PORT = process.env.PORT;

                 /* Login system*/
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log("connected in DB"));

app.listen(PORT,()=>{
    console.log("started in" + ` ${PORT}`);
})
