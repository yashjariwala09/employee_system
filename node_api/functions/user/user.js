const {User}=require('../../model/docUserLogin');
const {Employee}=require('../../model/docEmployeeReg');
const bcrypt =require('bcryptjs');

const addUser=(newUser)=>{
    let user= new User(newUser);
    
    return new Promise((resolve,reject)=>
    {
        user.save().then()
            .then(()=>resolve())
            .catch((e)=>{
                console.log("ERROR : "+e);
                reject();
           });
    });
}

const login=(user)=>{
    return new Promise((resolve,reject)=>{
        User.find({username:user.username,password:user.password})
            .then((res)=>console.log(res))
            .catch(()=>reject());
    }
    );
}

const addEmployee=(newUser)=>{
    let emp= new Employee(newUser);

    return new Promise((resolve,reject)=>
    {
        emp.save().then(()=>{return emp.genUser()})
        .then((user)=>{if(user) addUser(user)})
            .then(()=>resolve())
            .catch((e)=>{
                console.log("ERROR : "+e);
                reject();
           });
    });
}

const updateEmployee=(newUser)=>{
    let {empid,...user}=newUser;

    return new Promise((resolve,reject)=>{
        Employee
            .findOneAndUpdate({empid},{$set : user},{returnOriginal : false})
            .then(()=>Employee.findOne({empid}).then((employee)=>resolve(employee)))
            .catch((e)=>{
                reject(e);
            });
    });
}

const getEmployeeByEmpId=(empid)=>{
    return Employee
            .findOne({empid})
            .then((employee)=>{
                let {_id,...newEmployee}={...employee._doc};
                return newEmployee;
            })
            .catch((e)=>e);
}

const getAllEmployees=()=>{
    return Employee.find();
}

module.exports={addUser,addEmployee,login,updateEmployee,getEmployeeByEmpId,getAllEmployees};