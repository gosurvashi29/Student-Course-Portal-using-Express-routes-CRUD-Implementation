const express= require('express')

const router= express.Router();  // router is a functionality of express, therefore for creating router we require express

router.get('/',(req,res)=>{
    res.send('Welcome to the Student & Course Portal API!');

})

router.post('/',(req,res)=>{
    res.send('Order created.');

})

module.exports=router; // bcz we have created new router file outside, we have to export the router. // now also import in main app js file