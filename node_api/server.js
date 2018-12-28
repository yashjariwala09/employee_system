const {express,bodyParser,...Imports}=require("./imports/imports");

const app = express();

const fields=['empid','name','gender','dob','doJoin','qulification','exprience',
                    'phoneNo','email','address','addedBy','isActive'];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Root called");
});

app.post("/user/login",(req,res)=>{
    let user=Imports.lodash.pick(req.body,['username','password']);

    Imports.User
        .login(user)
        .then(()=>res.send())
        .catch(()=>res.status(404).send()); 
});

app.post("/user/register",(req,res)=>{ 
    let user=Imports.lodash.pick(req.body,fields);
    Imports.User
        .addEmployee(user)
        .then(()=>res.send())
        .catch(()=>res.status(404).send());
});

app.patch("/user/update",(req,res)=>{
    
    let user=Imports.lodash.pick(req.body,fields);

    Imports.User
        .updateEmployee(user)
        .then((employee)=>res.send(employee))
        .catch(()=>res.status(404).send()); 
});

app.post("/user/employee",(req,res)=>{
    let empid=Imports.lodash.pick(req.body,["empid"]).empid ;

    Imports.User
        .getEmployeeByEmpId(empid)
        .then((employee)=>res.send(employee))
        .catch(()=>res.status(404).send()); 
});

app.post("/user/employees",(req,res)=>{
    Imports.User
        .getAllEmployees()
        .then((employees)=>res.send(employees))
        .catch(()=>res.status(404).send()); 
});

app.listen(2000,()=>console.log("Node API port is up"));
