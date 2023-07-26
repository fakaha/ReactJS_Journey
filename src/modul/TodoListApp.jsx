import { useState } from "react";

const TodoListApp = () =>{
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState([]);

    function generateId(){
        return Date.now();
    }

    function saveTodoHandler (event){
        event.preventDefault();

        if(!activity){
            return setMessage('Aktifitas tidak boleh kosong!');
        }

        setMessage('');
        if(edit.id){
            const updatedTodo = {
                ...edit,
                activity: activity
            };
            
            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id == edit.id
            });

            const updatedTodos = [...todos]
            updatedTodos[editTodoIndex] = updatedTodo;
            
            setTodos(updatedTodos);

            return cancelEditHandler();
        }

        // setTodos([...todos, activity]);
        setTodos([
            ...todos, 
            {
                id: generateId(),
                activity: activity, //Bisa disingkat activity saja kalau properti dan value sama
                done: false
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
        
        if(edit.id) cancelEditHandler();
    }

    function editTodoHandler(todo){
        setActivity(todo.activity)
        setEdit(todo);
    }

    function cancelEditHandler(){
        setEdit({});
        setActivity('');
    }

    function doneTodoHandler(todo){
        const updatedTodo = {
            id: todo.id,
            activity: todo.activity,
            done: todo.done ? false : true
        };
        const editTodoIndex = todos.findIndex(function(currentTodo){
            return currentTodo.id == todo.id
        });

        const updatedTodos = [...todos]
        updatedTodos[editTodoIndex] = updatedTodo;
        
        
        setTodos(updatedTodos)
    }

    return(
        <>
        <h1>Simple Todo List</h1>
        {message && <div style={{color:'red'}}>{message}</div>}
        
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
            {edit.id && <button onClick={cancelEditHandler}>
                Batal Edit
            </button>
            }
        </form>
        {todos.length > 0 ? (
        <ul>
            {todos.map(function(todo){
                return( 
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)}/>
                    {todo.activity}({todo.done ? 'Selesai' : 'Belum Selesai'})
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
                );
            })}
        </ul>
        ) : (
            <i>Tidak ada todo</i>
        )}
        </>
    )
}

export default TodoListApp;