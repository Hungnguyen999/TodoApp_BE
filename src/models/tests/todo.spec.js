const { insert,updateById,deleteById,getAll,todos } = require('../todo');
describe('Test todo model',()=>{
    it('should create todo & return inserted todo',()=>{
        const inserted = insert({ id: 1, title: "First Todo"});
        expect.assertions(3);
        // const inserted1 = insert({ id: 2, title:"Second todo"});
        expect(inserted).toEqual({id: 1,title: "First Todo",completed: false });
        // expect(inserted1).toEqual({ id:2,title: "Second todo",completed: false});
        expect(todos.length).toEqual(1);
        expect(todos[0]).toEqual({id: 1,title: "First Todo",completed: false });
        // expect(todos[1]).toEqual({id:2, title: "Second todo",completed: false});
    });
    it('Should update todo & return updated one',()=>{
        //insert({ id: 1,title:"First Todo"});
        const updated = updateById({ id: 1,title:"Second todo"});
        expect.assertions(4);
        expect(todos[0]).toEqual(updated);
        expect(updated.id).toEqual(1);
        expect(updated.title).toEqual("Second todo");
        expect(updated.completed).toEqual(false);
    }); 
    it('Should return false if could not found todo item',()=>{
        //insert({ id: 1,title: 'first todo'});
        const updated = updateById({id: 2,title:'Second todo'});
        expect(updated).toEqual(false);
    });
    it('Should delete todo with id',()=>{
        //insert ({ id: 1, title: 'title todo' });
        const deleted = deleteById(1);
        expect.assertions(2);
        expect(deleted).toEqual(true);
        expect(todos.length).toEqual(0);
    });
    it('Should return false if could not find todo id',()=>{
        insert ({ id: 1, title: 'First todo' });
        const deleted = deleteById(2);
        expect.assertions(2);
        expect(deleted).toEqual(false);
        expect(todos.length).toEqual(1);
    });
    it("Should return all todos",()=>{
        insert({ id:2,title: "Second todo" })
        const todoList = getAll();
        expect(todoList).toEqual(todos);
    });
    it("Should return all todos is completed",()=>{
        insert({ id: 3, title: "Third todo"});
        insert({ id: 4, title: "Fourth todo"});
        updateById({ id:2, completed: true});
        console.log(todos);
        const todoList = getAll({ completed: false});
        expect(todoList.length).toEqual(3);
    });
    it("Should return all completed todos",()=>{
        const todoList = getAll({ completed: true});
        expect(todoList.length).toEqual(1);
    });
})