const { ObjectId } = require("mongodb");
const connect = require("./../database/db")
const mongoose=require('mongoose')
const book=require('../Book')



exports.index =  async (req,res) =>{
    //const db = await connect();
   // const books =await db.collection("book").find().toArray();
   const books = await  book.Schema.find();  
   res.json(books);
 };
 
 exports.store = async (req,res) =>{
     try {
        await book.Schema.create(req.body)
        res.status(201).json({data:"Book is created"});

     } catch (error) {
         res.send("your missed the terms in create")
     }

    //const db = await connect();
     //await db.collection("book").insertOne(req.body)
  
  };

  exports.show = async (req,res) =>{
    const id = req.params.id;
    const books = await book.Schema.findOne({_id:ObjectId(id)});  
    //const db = await connect();
    //bconst book = await  db.collection('book').find({_id:new ObjectId(id)}).toArray();
    res.json(books);
};

exports.update = async(req,res) =>{
    const _id =ObjectId(req.params.id);
    const books = await book.Schema.updateOne({_id},{$set:req.body})
   // const db = await connect();
  // await db.collection("book").updateOne({ _id },{$set:req.body});
   res.json({"data": "book is updated"})
 }
 exports.delete = async (req,res) =>{
    const _id =ObjectId(req.params.id);
     await book.Schema.deleteOne({_id})
   // const db = await connect();
   //await db.collection("book").delete({ _id });
   res.status(204).json({"data": "book is deleted"})
}