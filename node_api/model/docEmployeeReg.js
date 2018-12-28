const mongoose =require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const validator=require('validator');

var EmployeeRegSchema=new mongoose.Schema(
{
    empid:{
        type:Number,
        required:true,
        minlength:1,
        unique: true
    },
    name:{
        type:String,
        required:true,
        minlength:1
    },
    gender:{
        type:String,
        required:true,
        minlength:1
    },
    dob:{
        type:String,
        required:true
    },
    doJoin:{
        type:String,
        required:true
    },
    qulification:{
        type:String,
        required:true
    },
    exprience:{
        type:String,
        required:true
    },
    Phone_no:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique: true,
        validate:{
            validator:(value)=>validator.isEmail(value),
            message:'{value} is not a valid email'
        }
    },
    address:{
        type:String,
        required:true
    },
    addedBy:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:false
    }
}, 
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

EmployeeRegSchema.methods.genUser=function(){
    var emp=this;
    var user={
        username:"",
        password:""
    }

    user.username=emp.name.replace(/\s/g,'')+emp.empid+"@lanetteam.com";
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 6;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        
    user.password = randomstring;
    return user;

}

var Employee=mongoose.model('Employee',EmployeeRegSchema);
module.exports={Employee};