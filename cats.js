var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app"); //if cat app does not exist, it will created it.

//need to define what a cat looks like
var catSchema = new mongoose.Schema({ //this defines a pattern for our data
   name: String,
   age: Number,
   temperament: String,
});

//we saved the cat Schema to a model
//we have all the methods associated with the 
var Cat = mongoose.modle("Cat", catSchema);


