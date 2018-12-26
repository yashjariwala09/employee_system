const _=require('lodash');
var {User}=require('./model/docUserLogin');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./connect/mongoose');




const {express,bodyParser,...Imports}=require("./imports/imports");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Root called");
});

app.post("/user/login",(req,res)=>{
    var body=_.pick(req.body,['username','password']);
    let newUser=Imports.User.addUser(body);
    res.send(JSON.stringify(newUser));
});

app.listen(2000,()=>console.log("Node API port is up")
);























