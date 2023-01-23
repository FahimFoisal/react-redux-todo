import React from 'react';
import { useSelector } from 'react-redux';
import { DeleteTodo } from './DeleteTodo';
import { EditTodoComp } from './EditTodoComp';
import {FaEdit,FaTrashAlt} from 'react-icons/fa';

const ToDoList = () => {
    const data = useSelector(state => state.todo.value);
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <th>No</th>
                    <th>Task Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        data.map((current,i) => {
                        return (
                            <tr>
                                <td>{i+1}</td>
                                <td>{current}</td>
                                <td><button className='btn btn-success' onClick={()=> EditTodoComp(i,current)}><FaEdit/></button></td>
                                <td><button className='btn btn-danger' onClick={()=> DeleteTodo(i)}><FaTrashAlt/></button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;