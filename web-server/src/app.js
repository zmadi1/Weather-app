const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send('<h1>Hello express</h1>')
});

app.get('/help',(req,res)=>{
    res.send("help page")
})


app.get('/about',(req,res)=>{
    res.send("about page")
})


app.get('/weather',(req,res)=>{
    res.send("view Weather page")
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})
