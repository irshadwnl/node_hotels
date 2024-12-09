const mongoose = require('mongoose');

// /define mongodb connection url:-
const mongoUrl='mongodb://localhost:27017/hotels'

// setup  mongodb connection:-
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// mongoose maintains a default connnection object representing the mongodb connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to mongoDB server");
})

db.on('disconnected',()=>{
    console.log("Disconnected to mongoDB server");
})

db.on('error',(err)=>{
    console.log("MongoDB connection error!!",err);
})

// export the database connection
module.exports=db;