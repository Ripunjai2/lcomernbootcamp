const mongoose=require('mongoose');

//const schema=mongoose.Schema;

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    maxlength:32,
    trim:true,
},
lastname:{
    type:String,
    maxlength:32,
    trim:true,
},
email:{
    type:String,
    require:true,
    trim:true,
    unique:true,
},
userinfo:{
    type:String,
    trim:true
},
//Do come back here
password:{
    type:String,
    required:true,
    trim:true
},
salt:String,
role:{
    type:Number,
    default:0
},
purchases:{
    type:Array,
    default:[]
}
})


module.exports=mongoose.model("User",userSchema);