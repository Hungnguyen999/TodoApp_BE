const express = require('express');
const router = express.Router();
const { createTodo,clearCompleted,deleteTodo,getTodo,updateTodo } = require('../controller/todoController')

router.post('/createTodo',createTodo);
router.post('/updateTodo',updateTodo);
router.post('/todos',getTodo);
router.post('/deleteTodo',deleteTodo);
router.post('/clearCompleted',clearCompleted);

// router.post('/api/createTodo',function(req,res){
//     res.send('Create todo page');
// });
// router.post('/api/updateTodo',function(req,res){
//     res.send('Update todo page');
// });
// router.post('/api/todos',function(req,res){
//     res.send('Get all todo page');
// });
// router.post('/api/deleteTodo',function(req,res){
//     res.send('Delete todo page');
// });
// router.post('/api/clearCompleted',function(req,res){
//     res.sen('Clear completed todo page');
// });


module.exports = router;