const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log("Server opened successfully")
})
.catch((err) => {
    console.log("Caught error: " + err)
})

var clothSchema = new mongoose.Schema({
    name: String,
    color: String,
    size: String,
    gender: String,
    price: Number

});
const Clothe = mongoose.model('Clothe',clothSchema);
//const cropTop = new Clothe({name:'Crop-top',color:"red",size:"M",price:3000})
Clothe.insertMany([
    {name:'Crop-top',color:"red",size:"M",price:3000},
    {name:'Shorts',color:"black",size:"S",price:2500},
    {name:'Shirt',color:"maroon",size:"L",price:1500},
    {name:'Vest',color:"white",size:"L",price:1000},
    {name:'Hoodie',color:"grey",size:"XL",price:3500}])
.then((data)=>{
    console.log("It worked");
    console.log(data);
})