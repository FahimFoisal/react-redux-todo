import Swal from 'sweetalert2';
import { EditTodo } from '../redux/state/todoSlice';
import store from '../redux/store/store';

export function EditTodoComp (i) {
    Swal.fire({
        input: 'text',
        inputPlaceholder: 'Enter New Task',
        inputValidator: (value) => {
            if (value) {
                store.dispatch(EditTodo({index:i,task:value}))
            }
        }
      })
}