const express = require('express')
const router = express.Router()
const User = require('./../model/user_model')


// return the all user
router.get('/list',async (req,res) =>{
  var message_data=req.flash("message");
  User.find({}, function(err, users) {
      res.render('templates/user/list_of_friend',{
        title:"Friends List",
        user:users,
        message:message_data,

      });
  });
})


router.get('/add',async (req,res) =>{
  var message_data=req.flash("message");
  res.render('templates/user/add_friend',
  {
    title:"Add Friends",
    message:message_data,

  });
})

//saving data to database
router.post('/adding',async (req,res) =>{
  var first_name=req.body.first_name;
  var last_name=req.body.last_name;
  if (first_name.length ==0 || last_name.length==0) {
    req.flash("message","All fields are required !")
    res.redirect("/gogaga/add");
  }
  else {
    try {
      const user=new User({
                first_name:first_name,
                last_name:last_name,
              })
      user.save();
      req.flash("message","Friend Added Succefully!");
      res.redirect("/gogaga/add");
    }
    catch (e) {
      req.flash("message","Something went wrong!");
      res.redirect("/goagaga/add");
    }
  }

})
module.exports = router;
