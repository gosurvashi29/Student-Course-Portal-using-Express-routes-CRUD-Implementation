const express= require('express')

const router= express.Router();  // router is a functionality of express, therefore for creating router we require express

router.use((req,res)=>{
    res.status(404).send('Page not found');

})


module.exports=router; // bcz we have created new router file outside, we have to export the router. // now also import in main app js file