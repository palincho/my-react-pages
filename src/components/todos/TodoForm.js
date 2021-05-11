import { useRef } from "react";
import Card from "../ui/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TodoForm(props) {
  const titleInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      desc: enteredDesc,
    };

    console.log(todoData);
  }

  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo title"
          ref={titleInputRef}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a description"
          ref={descInputRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default TodoForm;
