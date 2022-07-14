import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import { useState } from 'react';
import { Todo } from './todomodel';


const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todolist, setTodolist] = useState<Todo[]>([]);

  const handleAddingTodoItem = (e: React.FormEvent) => { // React.FormEvent is from stackOverflow could also be React.SyntheticEvent
    e.preventDefault();

    if (todo) {
      
      setTodolist([])
    }
    
  };

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">To-Do List</span>
      <AddTask todo={todo} setTodo={setTodo} handleAddingTodoItem={handleAddingTodoItem}/>
    </div>
  );
}

export default App;
