const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const todoController = require('./controller/todocontroller')

const app = express()

app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

app.use(express.static('./public'));

todoController(app)



app.listen(3004)
