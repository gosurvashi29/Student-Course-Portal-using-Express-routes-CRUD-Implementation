// Import Express
const express = require('express');

// Initialize the Express app
const app = express();


//Importing router

const coursesRouter= require('./routes/courses')

const errorRouter=require('./routes/error404')

const homeRouter= require('./routes/home')

const studentsRouter=require('./routes/students')



// Define routes

//Integrating 
app.use('/students', studentsRouter);

app.use('/courses',coursesRouter);

app.use('/home', homeRouter);

app.use(errorRouter);


  
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
