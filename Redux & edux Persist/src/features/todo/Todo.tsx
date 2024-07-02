import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addTodo,deleteTodo } from './todoSlice';
import { RootState, AppDispatch } from '../../app/store';

const Todo = () => {
    const [text, settext] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const todos = useSelector((state: RootState) => state.counter.todos);

    const handleAddTodo = () => {
        if(text.trim()){
            dispatch(addTodo(text));
            settext('');            
        }
    }       

   
  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" onChange={(e) => settext(e.target.value)} />
        <button onClick={handleAddTodo}>Add todo</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.text}
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo