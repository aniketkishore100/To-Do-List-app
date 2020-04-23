let data = [{item: "heyy"}];


module.exports = function(app){
    

    app.get('/todo',(req,res)=>{
        res.render('index',{data:data})
    })
    
    app.post('/todo',(req,res)=>{
        data.push(req.body);
        res.json({success:true,todo:data})
    })

    app.delete('/todo/:item',(req,res)=>{
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-') !== req.params.item
        })
        res.json(data);
    })
}