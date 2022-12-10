import { useState } from 'react';
import '../reset.css';
import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CheckAll from './CheckAll';
import MoreFeatures from './MoreFeatures';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [idTodo, setIdTodo] = useState(1);
  const [filter, setFilter] = useState("all");

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

  const clearCompleted = () => {
    const clear = todos.filter(todo => {
      return todo.isComplete !== true;
    })

    setTodos(clear);
  }

  const todosFiltered = (filter) => {
    if(filter === "all") {
      return todos;
    }
    if(filter === "active"){
      return todos.filter(todo => !todo.isComplete);
    }

    if(filter === "completed"){
      return todos.filter(todo => todo.isComplete);
    }
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm newTodo={newTodo} input={input} changeInput={changeInput} />
        <TodoList todosFiltered={todosFiltered} filter={filter} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        <CheckAll completeAll={completeAll} todos={todos} />
        <MoreFeatures filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
      </div>
    </div>
  );
}

export default App;
