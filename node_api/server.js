const {express,bodyParser,...Imports}=require("./imports/imports");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Root called");
});

app.post("/user/login",(req,res)=>{
    let newUser=Imports.User.addUser(req.body);
    res.send(JSON.stringify(newUser));
});

app.listen(2000,()=>console.log("Node API port is up")
);