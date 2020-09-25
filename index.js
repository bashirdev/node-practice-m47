const express =require('express');
const bdyParser= require('body-parser');
const cors =require('cors');
const app=express();
app.use(bdyParser.json());
app.use(cors());


const users=['bashir', 'nasir', 'rasel', 'rubel']
app.get('/' , function(req,res){
    res.send('hello world')
})
app.get('/users/:id', (req,res)=>{
    const id= req.params.id;
    const name=users[id];
    res.send({id, name});
})

//post
app.post('/addUser', (req,res)=>{
    console.log('data recive', req.body);
    const user=req.body;
    user.id=55;
 res.send(user)
})
app.listen(3000, ()=>{
    console.log("server will be start on port 30000");
})