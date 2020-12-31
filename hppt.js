// I am recreating the http request,getting and parsing response
const htpp = require('http');

const latitude = -26.256689;
const longitude= 28.441240;

const url = `http://api.weatherstack.com/current?access_key=9d448a0e55e896f51713880a1c80ced6&query=${latitude},${longitude}`;


const request = htpp.request(url,(response)=>{

    let data = '';
    response.on('data',(chunk)=>{
        data = data + chunk.toString();
        // console.log(chunk)
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    });
})

request.end()