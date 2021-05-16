import TodoItem from "./TodoItem";

function TodoList(props) {
  const listStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0
  };

  return (
    <ul style={listStyle}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </ul>
  );
}

export default TodoList;
