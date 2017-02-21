var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new monoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
