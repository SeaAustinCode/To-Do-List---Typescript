import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../todomodel'
import { BiEdit } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import { IoIosCheckbox } from 'react-icons/io';
import './styles.css'
import ListOfToDos from './ListOfToDos';

type Props = {
    todo: Todo,
    todolist: Todo[],
    setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const ToDoCard = ({ todo, todolist, setTodolist }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(todo.todoitem)

    const handleCompleted = (id: number) => {
        setTodolist(
            todolist.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ));
    };

    const handleDelete = (id: number) => {
        setTodolist(todolist.filter((todo) => todo.id !== id))
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodolist(
            todolist.map((todo) => (todo.id === id ? { ...todo, todoitem: editToDo } : todo
            )));
        setEdit(false);
    }
    
// this feature makes it so that when edit icon is selected the focus immediately goes into the edit field. 
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        // functionality to mark an item as complete, using ternary to check if todo has been completeed if yes render strikethrough if not render normally
        <form className="todocard" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input className="todocard_text" value={editToDo} ref={inputRef} onChange={(e) => setEditToDo(e.target.value)} />
            ) : todo.completed ? (
                <s className="todocard_text">{todo.todoitem}</s>

            ) : (
                <span className="todocard_text">{todo.todoitem}</span>
            )}
            <div>
                <div>
                    <span className="todocard_icon"
                        onClick={() => {
                            if (!edit && !todo.completed) {
                                setEdit(!edit);
                            }
                        }}>
                        <BiEdit />
                    </span>
                    {/* // delete functionality  */}
                    <span className="todocard_icon" onClick={() => handleDelete(todo.id)}>
                        <TiDelete />
                    </span>
                    <span className="todocard_icon">
                        <IoIosCheckbox onClick={() => handleCompleted(todo.id)} />
                    </span>
                </div>
            </div>
        </form >
    )
}

export default ToDoCard