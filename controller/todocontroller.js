const data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding'}];


module.exports = function(app){
    

    app.get('/todo',(req,res)=>{
        res.render('index',{data:data})
    })
    
    app.post('/todo',(req,res)=>{
        res.redirect('/todo')
    })
}