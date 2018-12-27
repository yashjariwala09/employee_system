const {User}=require('../../model/docUserLogin');

const addUser=(newUser)=>{
    let user= new User(newUser);
    
    return new Promise((resolve,reject)=>
    {
        user.save().then(()=>user.genrateAuthToken())
            .then(()=>resolve())
            .catch((e)=>{
                console.log("ERROR : "+e);
                reject();
           });
    });
}

module.exports={addUser};