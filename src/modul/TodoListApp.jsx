import { useState } from "react";

const TodoListApp = () =>{
    const [activity, setActivity] = useState('');
    const [todos, setTodos] = useState([]);

    function generateId(){
        return Date.now();
    }

    function addTodoHandler (event){
        event.preventDefault();

        // setTodos([...todos, activity]);
        setTodos([
            ...todos, 
            {
                id: generateId(),
                activity: activity,
            },
        ]);
        setActivity('');
        // console.log(todos);
    }

    function removeTodoHandler(todoId){
        const filteredTodos  = todos.filter(function(todo){
            return todo.id !== todoId;
        });
        setTodos(filteredTodos);
    }

    return(
        <>
        <h1>Simple Todo List</h1>
        <form onSubmit={addTodoHandler}>
            <input 
            type="text" 
            placeholder="Nama aktivitas"
            value={activity}
            onChange={function(event){
                setActivity(event.target.value)
            }}/>
            <button type="submit">Tambah</button>
        </form>
        <ul>
            {todos.map(function(todo){
                return( 
                <li key={todo.id}>{todo.activity}
                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
                );
            })}
        </ul>
        </>
    )
}

export default TodoListApp;