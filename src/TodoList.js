import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, deleteTodo}) {
    return (
            todos.map( todo => {
                return <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} />
            })
    )
}
