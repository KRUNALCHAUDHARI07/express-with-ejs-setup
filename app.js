const express = require('express');
const path = require('path');
 require('dotenv').config();
const { title } = require('process');

const app = express();
const port = process.env.PORT || 3001;

//import db config
require('./config/db').db()
const postRouter = require('./api/post')
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'));


app.use('/post', postRouter);

app.get('/',(req,res)=>{
    res.render('index',{ title: 'Home Page' })
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);    
})
