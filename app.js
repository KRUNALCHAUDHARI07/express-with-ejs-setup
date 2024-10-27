const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index',{ title: 'Home Page' })
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);    
})
