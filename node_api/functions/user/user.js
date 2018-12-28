const {User}=require('../../model/docUserLogin');

const addUser=(newUser)=>{
    let user= new User(newUser);

    return new Promise((resolve,reject)=>
    {
        user.save().then(()=>user.genrateAuthToken())
            .then((token)=>resolve(token))
            .catch((e)=>{
                console.log("ERROR : "+e);
                reject();
           });
    });
}

const login=(user)=>{
    return new Promise(User.findOne({username:user.username})
    .then((user)=>{
        console.log(user);
        resolve();
    }));
}
module.exports={addUser,login};