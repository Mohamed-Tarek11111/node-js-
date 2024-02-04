//: قيمة متغيرة
//بص بيراميتر:---/:--
// body بيراميتر ملف json
// query بيراميترmt ?g=50


//------Libraries-------
const express=require("express");
const mongoose=require("mongoose");
const Article=require("./models/Article.js");
//-------------------------------
//---DB------------
//mongodb+srv://mm1632002:<password>@mohamed1.lk0lj1s.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://mm1632002:1632002@mohamed1.lk0lj1s.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected DataBase"); //تم الربط
}).catch((error)=>{
    console.log("error DataBase",error);
})

//--------------------------
//-----app---------
const app=express();
app.use(express.json())

app.get("/mt",function(req,res){
    
  console.log(req.query); //{ g: '50' }
     


// res.send(` iam is ${n1}`)
})
//----------------------------
// body بيراميتر
// app.get("/mt2",function(req,res){
//     let n1=req.params.n1;
//     let n2=req.params.n2;
//      let t=Number(n1)+Number(n2);
// res.send(`the total is ${t}`)
// })
//----------------------------------
app.get("/n",function(req,res){
    let n="";
    for(let i=0;i<=100;i++){
n+=i +"-"
    }
res.send("<h1>tarek</h1>")
res.sendFile(__dirname +"/views/index.html")// ملف html
res.render("index.ejs",{
    name:"n",
    number:n,
})

//------------------------------------
// res.json({
//     name:req.body.name,
//     age:req.query.age,
//     mm:true
// })
})

// app.get("/hi",(req,res)=>{
// res.send("hhhhhhhhhhhhhhh")
// })

// app.delete("/hii",(req,res)=>{
//     res.send("hhhhhhdddhhhhhhhhh")
//     })

// app.post("/coment",(req,res)=>{
//     res.send("coment")
// })

// -------------------------------------------
//-----ARTICLES ENOPOINTS--- تحميل البيانات في قاعد البيانات
//post الافضل
// ------------1-----------------
app.post("/s1",async(req,res)=>{
    
    let newArticle=new Article();
    const t=req.body.title 
    const b=req.body.body
    const m=req.body.mobel

    newArticle.title=t;
    newArticle.body=b;
    newArticle.mobel=m;

    newArticle.numberm=m; //11245663 شال الصفر علشان ركم
    await newArticle.save();
    res.send("save")
}) 

// ------------2-----------------
app.post("/s2",async(req,res)=>{
    
    let newArticle=new Article();
    const t="mmmm" 
    const b="tttttt"
    const m="nnnnnnnnnnnnnnnn"

    newArticle.title=t;
    newArticle.body=b;
    newArticle.mobel=m;

    newArticle.numberm=m; //11245663 شال الصفر علشان ركم
    await newArticle.save();
    res.send("save")
}) 

// -------------------------------------------
// اطبع قاعدالبيانات كلهfind--------1-----

app.get("/cc",async(req,res)=>{
    const f= await Article.find();
    // find طباعه
    res.json(f)
})

// اطبع id معين من قاعد البيانات findById-------2------
app.get("/c1/:cid",async(req,res)=>{
    const id =req.params.cid
    const idd= await Article.findById(id);
    // findById id معين
    res.json(idd)
})
// show html------------3-----------

app.get("/showArticle",async(req,res)=>{
    const s=await Article.find()
    res.render("showArticle.ejs",{
        aaS:s
    })
    })
// --------------------------------------------------------
 // findByIdAndDelete حذف id معين
app.delete("/c2/:cid",async(req,res)=>{
    const id =req.params.cid
    const idd= await Article.findByIdAndDelete(id);
    // findByIdAndDelete حذف id معين
    res.json(idd)
})


app.listen(300,()=>{
    console.log("mt 300");
})











