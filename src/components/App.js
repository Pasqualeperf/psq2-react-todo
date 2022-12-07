import { useState } from 'react';
import '../reset.css';
import '../App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [idTodo, setIdTodo] = useState(1);

  const changeInput = (event) => {
    setInput(event.target.value);
  }

  const newTodo = (event) => {
    event.preventDefault();
    if(input.trim() !== "") {
      setTodos(() =>{
       return [...todos, {id: idTodo, title: input, isComplete: false}]
      });
  
      setInput("");
      setIdTodo(idTodo + 1);
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(e => {
      return e.id !== id;
    }))
  }

  const toggleComplete = (id) => {
    const updated = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updated);
  }

  const completeAll = () => {
    const complete = todos.map(todo => {
      todo.isComplete = true;
      return todo;
    })

    setTodos(complete);
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={newTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={input}
            onChange={changeInput}
          />
        </form>

        <ul className="todo-list">
          {
            todos.map(todo => (
              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" checked={todo.isComplete ? true : false} onChange={() => {toggleComplete(todo.id)}} />
                  <span className={`todo-item-label ${todo.isComplete ? "line-through" : ""}`}>{todo.title}</span>
                  {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
                </div>
                <button className="x-button" onClick={()=> {deleteTodo(todo.id)}}>
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
        <div className="check-all-container">
          <div>
            <div className="button" onClick={completeAll}>Check All</div>
          </div>
          {
            todos.length > 0 ? (
              <span>{todos.length} items remaining</span>
            ) : ""
          }
          
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
