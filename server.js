// adding required packages
const express =require('express')
const mongoose=require('mongoose')
const app=express()
const path=require('path');
var session = require('express-session');
var flash = require('connect-flash');
const user_router=require('./User/routes/user_router')  // user model routing

var PORT= process.env.PORT || 80;                       // port no for app

mongoose.connect('mongodb+srv://admin_nishant:Nishantnn1234@cluster0-a3gfd.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})                                                      // connection to mongo db

app.set('view engine','ejs')                            // ejs template engine
app.set('views', path.join(__dirname, './User/views'));  // path for views
app.use(express.static(__dirname + '/User/views/static'));  // static file path
app.use(express.urlencoded({ extended: false }))
app.use(session({secret: "Shh, its a secret!",saveUninitialized: true,resave: true})); // session
app.use(flash());                                             // For sending messages throught app



app.use('/gogaga',user_router)


app.get('/',async (req,res) =>{
  // default routing error page
  var message_data=req.flash("message");
  res.render('templates/user/error_page',{
    title:"404 Error",
    message:message_data,

  });
})

// port assignment for app
app.listen(PORT);
