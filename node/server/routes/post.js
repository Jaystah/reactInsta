const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Posts = mongoose.model("Posts"); 

const requireLogin = require('../middleware/requireLogin');


router.get("/seePosts",(req,res)=>{
Posts.find().populate("postedBy","_id name").then(post=>{
    res.json({post})
});
})

router.post('/createPost', requireLogin,(req,res)=>{
    const {title,body,url} = req.body;

    if(!title || !body || !url){
        return res.status(422).json({error: "Please add all the fields"});
    }
    req.user.password = undefined;
    const post = new Posts({
        title,
        body,
        photo: url,
        postedBy: req.user
    });

  post.save().then(result=>{
      res.json({post: result});
  }).catch(error=>{
      console.log(error);
  })
})

router.get('/profile',requireLogin,(req,res)=>{
    Posts.find({postedBy: req.user._id}).populate('postedBy',"_id name").then((post)=>{
        res.json(post);
    });
})
module.exports = router;