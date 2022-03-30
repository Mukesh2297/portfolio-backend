const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const dataRoutes = require('./routes/dataRoute');
const app = express();
const PORT = process.env.PORT||3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',
    'OPTIONS,GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
    next();

})

app.use('/data',dataRoutes);


app.listen(PORT,()=>{
    console.log(`server is hosted at ${PORT}`);
})