import React from 'react'

export default function Todo({todo, deleteTodo}) {
    function handleTodoClick(){
        deleteTodo(todo.id)
    }

    return (
        <div>
            <label className="list_item">
                <div className="list_word"> {todo.name} </div>
                {/* <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/> */}
                <input type="submit" value="刪除" onClick={handleTodoClick} className="list_delete"/>
            </label>
        </div>
    )
}
