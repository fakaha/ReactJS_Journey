import { useState } from "react";

const TodoListApp = () =>{
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);

    function generateId(){
        return Date.now();
    }

    function saveTodoHandler (event){
        event.preventDefault();

        if(edit.id){
            const updatedTodo = {
                id: edit.id,
                activity: activity
            };
            
            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id == edit.id
            });

            const updatedTodos = [...todos]
            updatedTodos[editTodoIndex] = updatedTodo;
            
            setTodos(updatedTodos);

            return;
        }

        // setTodos([...todos, activity]);
        setTodos([
            ...todos, 
            {
                id: generateId(),
                activity: activity, //Bisa disingkat activity saja kalau properti dan value sama
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

    function editTodoHandler(todo){
        setActivity(todo.activity)
        setEdit(todo);
    }

    return(
        <>
        <h1>Simple Todo List</h1>
        <form onSubmit={saveTodoHandler}>
            <input 
            type="text" 
            placeholder="Nama aktivitas"
            value={activity}
            onChange={function(event){
                setActivity(event.target.value)
            }}/>
            <button type="submit">
                {edit.id ? 'Simpan Perubahan' : 'Tambah'}
            </button>
        </form>
        <ul>
            {todos.map(function(todo){
                return( 
                <li key={todo.id}>{todo.activity}
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
                );
            })}
        </ul>
        </>
    )
}

export default TodoListApp;