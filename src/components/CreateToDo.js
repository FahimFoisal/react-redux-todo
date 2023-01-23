import React, { useRef } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { AddTodo } from '../redux/state/todoSlice';
import ToDoList from './ToDoList';

const TodoPage = () => {
    const todoValue = useRef();
    const dispatch = useDispatch();
    
    return (
        <div>
            <div className="card mt-5" style={{ width: "68rem", margin: "auto"}}>
                <div className="card-body p-5 m-5">
                    <h3 className='text-success'>ToDo List Manager</h3>
                    <div className="input-group mb-5 mt-5">
                        <input type="text" ref={todoValue} className="form-control" placeholder="Add Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-primary" onClick={()=>dispatch(AddTodo(todoValue.current.value))} type="button" id="button-addon2">Add</button>
                    </div>
                    <ToDoList/>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;