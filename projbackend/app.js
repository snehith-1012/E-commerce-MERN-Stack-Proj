require('dotenv').config();

 
const mongoose=require("mongoose");
const express= require("express");
const app=express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const { body } = require('express-validator');

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

// db connection
mongoose.connect(process.env.DATABASE,{
 useNewUrlParser:true,
 useUnifiedTopology:true,
 useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED");
});

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//  my routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);


//port
 const port=process.env.PORT || 8000;

 //starting a server
 app.listen(port,()=>{

    console.log(`app is running at ${port} `);

 });