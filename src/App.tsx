import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import { useState } from 'react';
import { Todo } from './todomodel';
import ListOfToDos from './components/ListOfToDos';



const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todolist, setTodolist] = useState<Array<Todo>>([]);

  const handleAddingTodoItem = (e: React.FormEvent) => { // React.FormEvent is from stackOverflow could also be React.SyntheticEvent
    e.preventDefault();

    if (todo) {
      setTodolist([...todolist, {id: Date.now(), todoitem: todo, completed: false}]);
      setTodo("");
    }
    
  };

  console.log(todolist);

  return (
    <div className="App">
      <span className="heading">To-Do List</span>
      <AddTask todo={todo} setTodo={setTodo} handleAddingTodoItem={handleAddingTodoItem}/>
      <ListOfToDos todolist={todolist} setTodolist={setTodolist}/>
    </div>
  );
}

export default App;
