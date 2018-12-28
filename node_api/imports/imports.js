const express = require("express");
const mongoose =require("../connect/mongoose");
const bodyParser=require("body-parser");
const lodash=require('lodash');

const User=require("../functions/user/user");

module.exports={express,bodyParser,User,lodash,mongoose}