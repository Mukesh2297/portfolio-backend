const conn = require('../db');

exports.getData=(req,res,next)=>{
    console.log(req.params.tab);
    if(req.params.tab == 'home'){
        conn.query("SELECT Name,Header_Caption__c, Footer_Caption__c, Designation__c, Location__c FROM Portfolio_Home__c",(err,result)=>{
            if(err){
                return res.json({message:"Something went wrong"})
            }
            res.json(result);
        })
    }
    else{
        conn.query("SELECT Name, Description__c, Header_Caption__c, Footer_Caption__c FROM Portfolio_Work__c",(err,result)=>{
            if(err){
                return res.json({message:"Something went wrong"})
            }
            res.json(result);
        })
    }

}