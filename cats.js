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
var Cat = mongoose.model("Cat", catSchema);

// var norris = new Cat({
//     name: "Mrs> Norris",
//     age: 7,
//     temperament: "Sleepy"
// });

// norris.save(function(err, cat){
//     if(err){
//         console.log("SOMETHIGN WENT WRONG");
//     }else{
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         console.log(cat);
//     }
// });


//this makes and saves a new cat all at once
Cat.create({
    name: "Snowy",
    age: 15,
    temperament: "Sweet"
}, function(err, cat){
    if(err){
        console.log("SOMETHIGN WENT WRONG");
        console.log(err);
    }else{
        console.log("Here's a cat for ya!");
        console.log(cat);
    }
});




//retrieve cats from db
//lists out all te cats in array format
Cat.find({}, function(err, cats){
   if(err){
       console.log("SOMETHING DONE GOT BROKED");
       console.log(err);
   }else{
       console.log("ALL THE CATS.....");
       console.log(cats);
   }
});