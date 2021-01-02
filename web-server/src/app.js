const path = require('path')
const express = require('express');
// const {
//     resolve
// } = require('path');
const hbs = require('hbs');


// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express();




//Setup handlebars engine and views locaion
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)); //we use this when 
//we are handling static html files
// app.set('views', __dirname + '/views');


app.get('', (req, res) => { //we use this when we're handling dynamic html files
    res.render('index', {
        title: 'WeatherApp',
        name: 'Zakhele Madi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        name: 'Zakhele',
        title: 'Help'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Zakhele Madi',
        title: 'About me'
    })
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