const express = require('express')
const app = express()

app.set('view engine','pug');

app.get('/todo',(req,res)=>{
    res.render('index')
})

app.listen(3004)
