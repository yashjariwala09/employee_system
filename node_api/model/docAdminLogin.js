const mongoose =require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');

var AdminLoginSchema=new mongoose.Schema({
    adminID:{
        type:Number,
        required:true
    },
    username:{
        type:String,
			required:true,
            trim:true,
            minlength:1,
            unique: true
    },
    password:{
        type:String,
		require:true,
		minlength:6
    },
    token:{
            type:String,
            default:null
        }
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

var Admin =mongoose.model('adminLogin',AdminLoginSchema);
module.exports={Admin};