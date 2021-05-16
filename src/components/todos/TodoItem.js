import Card from "../ui/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TodoItem(props) {
  const divStyle = {
    color: "black",
  };
  return (
    <div style={divStyle}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.description}</p>
        </Modal.Body>

        <Modal.Footer>
          {/* if done -> button style change */}
          <Button variant="secondary">Favorite</Button>
          <Button variant="primary">Done</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default TodoItem;
