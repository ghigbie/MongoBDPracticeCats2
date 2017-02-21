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

var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("SOMETHIGN WENT WRONG");
    }else{
        console.log("WE JUST SAVED A CAT TO THE DB");
        console.log(cat);
    }
});