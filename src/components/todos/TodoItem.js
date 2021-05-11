import Card from "../ui/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TodoItem(props) {
  return (
    <Card>
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
    </Card>
  );
}

export default TodoItem;
