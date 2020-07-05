//id, title, completed

const todoModel = require('../models/todo.js');

exports.createTodo = (req,res) =>{
    const todo = req.body;
    const inserted = todoModel.insert(todo);
    res.json(inserted);
    // const params = req.body;
    // res.json(params);
 
};  //req là những thông tin khách hàng gửi
exports.updateTodo = (req,res) =>{
    const todo = req.body;
    const updated = todoModel.updateById(todo);
    res.json(updated);
};
exports.getTodo = (req,res) => {
    const { completed } = req.body;
    const todos = completed === undefined ? todoModel.getAll():todoModel.getAll({ completed: !!completed });
    res.json(todos);
};
exports.deleteTodo = (req,res) => {
    const { id } = req.body;
    const result = todoModel.deleteById(id);
    res.json({ result });
};
exports.clearCompleted = (_,res) => {
    const completed = todoModel.findAll({ completed: true });
    completed.forEach(todo => {
      todoModel.deleteById(todo.id);
    });
    res.json({ result: true });
};