
const mongoose  = require('mongoose')
const Schema = mongoose.Schema

//defining a connection to database
mongoose.connect('mongodb://localhost/table',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//defining Schema
const todoSchema = new Schema({
    item: String
});

var ToDo = mongoose.model('todo',todoSchema)

module.exports = function(app){
    
    app.get('/',(req,res)=>{
        res.redirect('todo');
    })

    app.get('/todo',(req,res)=>{
        ToDo.find({},function(err,data){
            if (err) throw err
            res.render('index',{data:data})
        })
        
    })
    
    app.post('/todo',(req,res)=>{
        var newToDo = new ToDo(req.body).save(function(err,data){
            if (err) throw err
            console.log(data)
            res.json({success:true,todo:data})
        })
    })

    app.delete('/todo/:item',(req,res)=>{
        ToDo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err
            res.json(data) 
        }) 
    })
}