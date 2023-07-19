const mongoose = require('mongoose'); //Mongoose connection
// Purpose of this file is to describe how our  collection(table) should look. 
const ProductSchema = new mongoose.Schema({
    name: {
    //Each Key will represent a catagory in our collection
    type: String,
    // required: [true, "Please Enter Your Product's Name"],
    // minlength: [3, "Must be at least 3 charaters!"]
},
    price: {
    //Each Key will represent a catagory in our collection
    type: Number,
    type: String,
    required: [true, "Please Name Your Price"],
    // minlength: [3, "Must be at least 3 charaters!"]
},
    color: {
    //Each Key will represent a catagory in our collection
    type: String,
    required: [true, "Please Describe Your Product"],
    // minlength: [3, "Must be at least 3 charaters!"]
},
    qty: {
    //Each Key will represent a catagory in our collection
    type: Number,
    required: [true, "Quantity Must Be Greater Than 0"]
},
});









const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;








// actionsAvalible: {
//     type: Number,
// required:[true,"Pet is required"],
// minlength:[5,"Pet must be 5 charaters"]
// },
// Description: {
//     type: String,
// min: [1,"Rating must be atleast 1"],
// max:[10,"Rating can not be more than 10"]
// }
// date:{
//     type:Date,
//     required: [true,"date is required"],
//     min:['1991-06-25',"Cant be before my birthday"],
// }
//FOR POSSIBLE CHECK BOX
// isOver21:{
//     type:Boolean
// }
// if you want an optional field you dont need the required part of the validation
// }
// , {
//     timestamps: true