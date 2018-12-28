const mongoose =require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');

var UserLoginSchema=new mongoose.Schema({
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
    isActive:{
        type:Boolean,
        required:true,
        default:false
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

UserLoginSchema.methods.genrateAuthToken=function(){
    var user=this;
    var token = jwt.sign({_id:user._id.toHexString()},'abc123').toString();
    user.token=token;

    return user.save().then(() => {
        return token;
    });
}


// UserLoginSchema.pre('save',function(next){
// 	var user = this;
// 	if(user.isModified('password')){
// 		bcrypt.genSalt(10,(err,salt)=>{
// 			bcrypt.hash(user.password,salt,(err,hash)=>{
//                 user.password=hash;
//                 next();
// 			});
//         });
// 	}else{
// 		next();
// 	}
// });

var User =mongoose.model('userLogin',UserLoginSchema);
module.exports={User};