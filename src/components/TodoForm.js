import React from "react";

export default function TodoForm(props) {
  return (
    <form action="#" onSubmit={props.newTodo}>
        <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={props.input}
        onChange={props.changeInput}
        />
    </form>
  )
}
