const express = require("express");
const router=express.Router();
const User=require("../../models/user")
const Book=require("../../models/book")




router.post("/user",(req,res)=>{
   
    const newUser = new User({
        name : req.body.name,
        phonenumber : req.body.phonenumber
    });
    newUser.save()
    .then(User=>{res.json(User)})
    .catch(err=>{console.log(err)})
});


router.post("/book",(req,res)=>{
    const newBook = new Book({
        name : req.body.name,
        Author : req.body.Author,
        Issued : false
    });
    newBook.save()
    .then(newBook=>{res.json(newBook)})
    .catch(err=>{console.log(err)})
});

router.get("/inlibrary",(req,res)=>{
Book.find({Issued : false})
.then(Book=>{res.json(Book)})
.catch(err=>{console.log(err)})
});
router.get("/outlibrary",(req,res)=>{
    Book.find({Issued : true})
    .then(Book=>{res.json(Book)})
    .catch(err=>{console.log(err)})
    });
router.get("/listofusers",(req,res)=>{
})
module.exports=router;