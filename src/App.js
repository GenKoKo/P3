import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App(){
    const [todos, setTodos] = useState([])
    const todoNameRef= useRef()

    useEffect(() =>{
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function deleteTodo(id){
        const newTodos = [...todos]
        const rest_todo = newTodos.filter(todo => todo.id !== id)
        // todo.complete = !todo.complete
        setTodos(rest_todo)
    }

    function handleAddTodo(e){
        e.preventDefault();
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos( prevTodos => {
            return [...prevTodos, {id: uuidv4(), name : name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    // function handleClearTodos(){
    //     const newTodos = todos.filter(todo => !todo.complete)
    //     setTodos(newTodos)

    // }

    return (
        <>

            <form className = "container">
                <div className="addform_container">
                    <input ref={todoNameRef} type="text" className="addform_input" />
                    <button onClick={handleAddTodo} className="addform_submit"> 新增紀錄</button>
                </div>
            </form>
                <hr/>
            <form className = "container">
                {/* <button onClick={handleClearTodos}> Clear Complete</button> */}
                {/* <div>{todos.filter(todo => !todo.complete).length} left to do</div> */}
                <TodoList todos={todos} deleteTodo = {deleteTodo}/>
                <Link to='/'>
                    <input type="submit" className="list_back" value="返回首頁"/>
                </Link>
            </form>
        </>
    )
}

export default App;