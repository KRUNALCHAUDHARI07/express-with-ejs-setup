const express  = require('express');
const router = express.Router();
const AppDataSource = require('../config/db').AppDataSource;
const post = require('../model/post.model');

const postRepository = AppDataSource.getRepository('post');
router.get('/',async (req,res)=>{

    const postList = await postRepository.find();   
    res.render('post/post',{ post: postList});
})

module.exports = router;