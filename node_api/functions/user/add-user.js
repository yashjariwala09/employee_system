//import of model
var {User}=require('../../model/docUserLogin');
const addUser=(body)=>{
    // user.functionCalled=true;
    var user1=undefined;
    var user= new User(body);
    // console.log(user);
    user.save().then(()=>{
            console.log("inside 1 save //server")
            return user.genrateAuthToken();
            })
            .then((token)=>{
            // console.log(token);
                return token;}).catch((e)=>{
              console.log("your error"+e);
            res.status(404).send("not found");
           });
           console.log(user1);
    // return user1;
}

module.exports={addUser};