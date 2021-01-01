const path = require('path')
const express = require('express');
const {
    resolve
} = require('path');


// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();




//index.html has a special meaning this will run automatically
//and it will render the index.html
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath)); //we use this when 
//we are handling static html files
// app.set('views', __dirname + '/views');

app.get('', (req, res) => { //we use this when we're handling dynamic html files
    res.render('index', {
        title: 'WeatherApp',
        name: 'Zakhele Madi'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

// app.get('',(req,res)=>{
//     res.send('<h1>Hello express</h1>')
// });

// app.get('/help',(req,res)=>{
//     res.send("help page")
// })


// app.get('/about',(req,res)=>{
//     res.send("about page")
// })


// app.get('/weather',(req,res)=>{
//     res.send("view Weather page")
// })

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})