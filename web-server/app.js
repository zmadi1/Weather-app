// const request  = require('request')
const geocode = require('../utilities/geocode')

const forecast = require('../utilities/forecast')


const address = process.argv[2]

if (!address) {
    console.log("Please provide the address")
} else {
    geocode(address, (error, {
        longitude,
        latitude,
        location
    } = {}) => {

        if (error) {
            return console.log(error);
        };
        // forecast(data.latitude,data.longitude,"Brakapn");
        // const {latitude,longitude} = data//I used destructuring here
        forecast(latitude, longitude, (error, forecastData) => {

            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData)

        })
    })
}
// const url = "http://api.weatherstack.com/current?access_key=9d448a0e55e896f51713880a1c80ced6&query=-26.2366%20"
// const url = "http://api.weatherstack.com/current?access_key=9d448a0e55e896f51713880a1c80ced6&query=Springs"
// const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Brakpan.json?access_token=pk.eyJ1IjoiemFraGVsZW1hZGkiLCJhIjoiY2tqYWpzN2NxMDJqZTJ0azFkdWYwMmszaSJ9.YePKa_ovquEgRK9TVQBR3g&limit=1"
// pk.eyJ1IjoiemFraGVsZW1hZGkiLCJhIjoiY2tqYWpzN2NxMDJqZTJ0azFkdWYwMmszaSJ9.YePKa_ovquEgRK9TVQBR3g

// request({url:url,json:true},(error,response)=>{
//     // console.log(response.body.current)
//     // const data = JSON.parse(response.body)
//     if(error){
//         console.log('Unable to connect to weather service provider')
//     }else if(response.body.error){
//         // console.log('Unable to find location');
//         // console.log(response.body.error)

//     }else{

//         console.log(`It is currently ${response.body.current.temperature} degrees out.There is a ${response.body.current.precip}% chance of rain`)
//     }
//     // console.log(data.current)
// })
// const key = "9d448a0e55e896f51713880a1c80ced6"

// request({url:url1,json:true},(error,response)=>{

//     if(error){
//         console.log("Unable to connect to location service")
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location try another search')
//     }else{
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude,longitude);

//     }

// })

// const geocode = (address,callBack)=>{
//     let url1 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiemFraGVsZW1hZGkiLCJhIjoiY2tqYWpzN2NxMDJqZTJ0azFkdWYwMmszaSJ9.YePKa_ovquEgRK9TVQBR3g&limit=1`;

//     request({url:url1,json:true},(error,response)=>{

//         if(error){
//             callBack('Unable to connect to location services',undefined);
//         }else if(response.body.features.length === 0){
//             callBack('Unable to find location . Try another search',undefined)
//         }else{
//             callBack(undefined,{
//                 latitude:response.body.features[0].center[0],
//                 longitude:response.body.features[0].center[1],
//                 location:response.body.features[0].place_name
//             })
//         }

//     });
// }