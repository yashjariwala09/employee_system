const mongoose =require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
// const validator = require('validator');

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
    token:{
            type:String,
            default:null
        }
    }
);
// UserLoginSchema.methods.toJSON = function () {
//     var user = this;
//     var userObject = user.toObject();
//     return _.pick(userObject, ['_id', 'username']);
// };



// const userLogin = mongoose.model('useLogin',UserLoginSchema);

UserLoginSchema.methods.genrateAuthToken=function(){
    var user=this;
    console.log("inside gen"+user);  
    var token = jwt.sign({_id:user._id.toHexString()},'abc123').toString();
    user.token=token;
    return user.save().then(() => {
        return token;
    });
}


UserLoginSchema.pre('save',function(next){
	var user = this;
	if(user.isModified('password')){
		bcrypt.genSalt(10,(err,salt)=>{
			bcrypt.hash(user.password,salt,(err,hash)=>{
				user.password=hash;
				next();
			});
		});
	}else{
		next();
	}

});


var User =mongoose.model('userLogin',UserLoginSchema);
module.exports={User};