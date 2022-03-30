const jsForce= require('jsforce');
require("dotenv").config();



const {SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env;
console.log(SF_USERNAME,SF_PASSWORD,SF_TOKEN);
const conn = new jsForce.Connection({
    loginUrl:SF_LOGIN_URL
})

conn.login(SF_USERNAME,SF_PASSWORD+SF_TOKEN,(err,userInfo)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("User Id: "+userInfo.id);
        console.log("Org Id: "+userInfo.organizationId);
    }
})


module.exports = conn;

