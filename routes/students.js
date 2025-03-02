const express= require('express');

const router=express.Router();
// Sample data
const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
// Student Routes
router.get('/', (req, res) => {
    const studentNames = students.map(student => student.name).join(", ");
    res.send(`Students: ${studentNames}`);
  });
  
  router.get('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
      res.send(`Student: ${student.name}`);
    } else {
      res.send("Student not found");
    }
  });


module.exports=router;