import "../App.css";
import TodoItem from "../components/todos/TodoItem";
import TodoForm from "../components/todos/TodoForm";

const Todo = () => {
  return (
    <section>
      <h1>Todo</h1>
      <main>
        <TodoForm />
        <TodoItem title="title" description="description" />
      </main>
    </section>
  );
};

export default Todo;
