import React from 'react'
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>; //React.Dispatch<React.SetStateAction<string>> --- Typing was found by hovering over setTodo on App.tsx
    handleAddingTodoItem:(e: React.FormEvent) => void;
}

const AddTask = ({ todo, setTodo, handleAddingTodoItem }: Props) => {
  return (
    <form className='add-task' onSubmit={handleAddingTodoItem}>
        <input type='input' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='add a task here' className="add-task-input"/>
        <button type='submit' className ="add-task-submit">Add Task</button>
        </form>
  )
}

export default AddTask