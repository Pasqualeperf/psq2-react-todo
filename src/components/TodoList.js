import React from 'react'

export default function TodoList(props) {
  return (
    <ul className="todo-list">
    {
      props.todosFiltered(props.filter).map(todo => (
        <li key={todo.id} className="todo-item-container">
          <div className="todo-item">
            <input type="checkbox" checked={todo.isComplete ? true : false} onChange={() => {props.toggleComplete(todo.id)}} />
            <span className={`todo-item-label ${todo.isComplete ? "line-through" : ""}`}>{todo.title}</span>
            {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
          </div>
          <button className="x-button" onClick={()=> {props.deleteTodo(todo.id)}}>
            <svg
              className="x-button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
            </svg>
          </button>
        </li>
      ))
    }
  </ul>
  )
}
