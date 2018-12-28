const {User}=require('../../model/docUserLogin');
const {Admin}=require('../../model/docAdminLogin');
const {Employee}=require('../../model/docEmployeeReg');

const addUser=(newUser)=>{
    let user= new User(newUser);
    
    return new Promise((resolve,reject)=>
    {
        user.save().then(
            // ()=>user.genrateAuthToken()
            )
            .then(()=>resolve())
            .catch((e)=>{
                console.log("ERROR : "+e);
                reject();
           });
    });
}


const addEmployee=(newUser)=>{
    let emp= new Employee(newUser);
    
    return new Promise((resolve,reject)=>
    {
        emp.save().then(()=>{return emp.genUser()})
        .then((user)=>{if(!user){return;}
        addUser(user)}
        )
            .then(()=>resolve())
            .catch((e)=>{
                console.log("ERROR : "+e);
                reject();
           });
    });
}






module.exports={addUser,addEmployee};