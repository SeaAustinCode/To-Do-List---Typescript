import React, { useRef } from 'react'
import './styles.css';

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //React.Dispatch<React.SetStateAction<string>> --- Typing was found by hovering over setTodo on App.tsx
  handleAddingTodoItem: (e: React.FormEvent) => void;
}

const AddTask: React.FC<props> = ({ todo, setTodo, handleAddingTodoItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='add-task' onSubmit={(e) => {
      handleAddingTodoItem(e);
      inputRef.current?.blur();
    }}>
      <input type='text'
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='add a task here' className="add-task-input" />
      <button type='submit' className="add-task-submit">Add Task</button>
    </form>
  )
}

export default AddTask