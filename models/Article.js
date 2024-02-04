let mongoose=require("mongoose");
let Schema=mongoose.Schema;
// تخطيط الجدول Schema
const articlesSchema=new Schema({
    title:String,
    body:String,
    mobel:String,
    numberm:Number,


})

// موديل model

const Article= mongoose.model("Article",articlesSchema)


module.exports=Article