const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("Server opened successfully")
})
.catch((err) => {
    console.log("Caught error: " + err)
})

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

const Product = mongoose.model('Product', productSchema);
 
const cloth = new Product({name:"Mountain bike", price:'hostel'})
cloth.save()
.then((data) => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})