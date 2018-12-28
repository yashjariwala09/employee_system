const {express,bodyParser,...Imports}=require("./imports/imports");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Root called");
});

app.post("/user/register",(req,res)=>{
    let user=Imports.lodash.pick(req.body,['username','password']);

    Imports.User.addUser(user).then(()=>res.send(token)).catch(()=>res.status(404).send());
});

app.post("/user/login",(req,res)=>{
    let user=Imports.lodash.pick(req.body,['username','password']);

    Imports.User.addUser(user).then(()=>res.send()).catch(()=>res.status(404).send()); 
});

app.listen(2000,()=>console.log("Node API port is up"));
