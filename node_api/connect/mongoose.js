var mongoose = require('mongoose');
// mongodb://localhost:27018


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27018/Emplyee_system");