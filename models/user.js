const mongoose =require('mongoose')
const Schema=mongoose.Schema

const PersonSchema = new Schema ({
      name :{
      type : String,
      required : true
      },
      phonenumber : {
        type:String,
        required:true
      },
     bookstaken :[{
        type:String
     }]
})

const User=mongoose.model('User',PersonSchema)

module.exports=User;