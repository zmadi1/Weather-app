
// //a callback function is a function that we provide as an argument to anther function
// setTimeout(()=>{
//     console.log('Two seconds are up')
// },2000)

// const names = ['Andrew','jen','jess'];
// const shortNames = names.filter((name)=>{
//     return name.length <=4;
// })


// const geocode = (address,callback)=>{
//     setTimeout(()=>{
//         const data = {
//             latitude:0,
//             longitude:0
//         };
    
//         callback(data)
//     },2000)
// }

// geocode("philadephia",(data)=>{
//     console.log(data);
// });

//
//Goal :Mess around with the callback pattern
//
//1.Define an add function that accepts the correct arguments
//2.Use setTime to simulate a 2 second delay
//3.After 2 seconds are up, call the callback function with the sum
//4.test your work

// const add = (i, j,callback)=>{
//     setTimeout(()=>{

//         const data = i + j;
//         callback(data);
//     },200)
// }

// add(1,4,(sum)=>{
//     console.log(sum)
// })

const name = "Andrew";
const userAge = 27;

const user = {

    //This is a shorhad for name:name
    name,
    userAge,

    // name:name,
    // userAge:userAge,
    location:"philadephia"
};

console.log(user)

//Object destructing

const product = {
    label:'Red notebook',
    price:3,
    stock:302,
    salePrice:undefined
    ,rating:4.2
};

// const label = product.label;
// const stock = product.stock;

//This is destructuring
// const {label:productLabel,stock,rating=5} =product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type,{label,stock})=>{//here we're destructuring

    // const {label} = myProduct
    console.log(label,stock,type)
}

transaction('order',product)