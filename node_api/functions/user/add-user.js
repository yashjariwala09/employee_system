//import of model

const addUser=(user)=>{
    user.functionCalled=true;
    return user;
}

module.exports={addUser};