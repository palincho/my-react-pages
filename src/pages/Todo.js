import "../App.css";
import { useState } from "react";
import TodoList from "../components/todos/TodoList";
import TodoForm from "../components/todos/TodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = todo => {
    setTodos(prevTodos => {
      return [todo, ...prevTodos];
    });
  }

  return (
    <section>
      <h1>Todo</h1>
      <main>
        <TodoForm onAddTodo={addTodoHandler} />
        <TodoList todos={todos} />
      </main>
    </section>
  );
};

export default Todo;
