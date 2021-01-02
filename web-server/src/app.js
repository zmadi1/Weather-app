const path = require('path')
const express = require('express');

const geocode = require('./utilities/geocode')

const forecast = require('./utilities/forecast')


const port = process.env.PORT || 3000;

const hbs = require('hbs');
const {
    send
} = require('process');


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
//we are handling static html files(in public folder)
// app.set('views', __dirname + '/views');


app.get('', (req, res) => { //we use this when we're handling dynamic html files
    res.render('index', {
        title: 'WeatherApp',
        name: 'Zakhele Madi'
    })
})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search);
    res.send({
        product: []
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


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'Please provide the address'
        })
    }
    geocode(req.query.address, (error, {
        longitude,
        latitude,
        location
    } = {}) => {

        if (error) {
            return res.send({
                error
            });
        };
        // forecast(data.latitude,data.longitude,"Brakapn");
        // const {latitude,longitude} = data//I used destructuring here
        forecast(latitude, longitude, (error, forecastData) => {

            if (error) {
                return res.send({
                    error
                });
            }
            res.send({
                location,
                forecast: forecastData,
                address: req.query.address
            })
            // console.log(location);
            // console.log(forecastData)

        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        nam: 'Zakhele',
        errorMessage: 'Help article not found'

    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Zakhele',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})