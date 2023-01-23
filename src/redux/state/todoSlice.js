
import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'Todo List',
    initialState: {
        value: []
    },
    reducers: {
        AddTodo: (state,action)=>{
            state.value.push(action.payload)
        },
        EditTodo: (state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task'])
        },
        DeleteTodoValue: (state,action)=> {

            state.value.splice(action.payload,1)
        }
    }
})


export const {AddTodo,EditTodo,DeleteTodoValue} = todoSlice.actions;
export default todoSlice.reducer;