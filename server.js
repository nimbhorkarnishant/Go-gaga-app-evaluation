const express =require('express')
const mongoose=require('mongoose')
const app=express()
const path=require('path');
var session = require('express-session');
var flash = require('connect-flash');
const user_router=require('./User/routes/user_router')

var PORT= process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/go-gaga-app', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine','ejs')

app.set('views', path.join(__dirname, './User/views'));
app.use(express.static(__dirname + '/User/views/static'));
app.use(express.urlencoded({ extended: false }))
app.use(session({secret: "Shh, its a secret!",saveUninitialized: true,resave: true}));
app.use(flash());




app.use('/gogaga',user_router)


app.get('/',async (req,res) =>{
  var message_data=req.flash("message");
  res.render('templates/user/error_page',{
    title:"404 Error",
    message:message_data,

  });
})


app.listen(5000);
