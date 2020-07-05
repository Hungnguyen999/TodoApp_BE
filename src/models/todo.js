const todos = [];

/**
 * Insert todo to db
 * @todo {id,title,completed}
 */

 
exports.insert = todo =>{
    const tobeTodo = { ...todo,completed: false };
    todos.push(tobeTodo);
    return tobeTodo;
};


/**
 *  update todo by ID
 * @param { todo: Todo }
 * @return { todo // false }
 */

exports.updateById = todo =>{
    let todoIndex = todos.findIndex(t => t.id === todo.id); //Sẽ rả về todo hoặc undefine
    if(todoIndex  !== -1){
        todos[todoIndex] = { ...todos[todoIndex], ...todo };
        return todos[todoIndex];
    }
    else{
        return false;
    }
};


/**
 * delete by ID 
 * @param { id: number }
 * @return { boolean }
 */
exports.deleteById = id =>{
    const todoIndex = todos.findIndex(todo => todo.id ==id);  
    if(todoIndex == -1){
        return false;
    }
    todos.splice(todoIndex, 1); //delete . call mongodb
    return true;
}

exports.getAll = params =>{
    if(!params){
        return todos;
    }
    else{
        const { completed } = params;
        return todos.filter(p => p.completed === completed);
    }
};  


exports.todos = todos;