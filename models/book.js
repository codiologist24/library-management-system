const mongoose =require('mongoose')
const Schema=mongoose.Schema

const BookSchema = new Schema ({
      name :{
      type : String,
      required : true
      },
       Author : {
        type:String,
        required:true
      },
     Issued :{
        type:Boolean
     }
})

const Book=mongoose.model('Book',BookSchema)

module.exports=Book;