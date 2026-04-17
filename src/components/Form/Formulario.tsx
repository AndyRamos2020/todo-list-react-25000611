import { Form, Button } from "react-bootstrap";
import "./form.scss";

const Formulario = () => {
  return (
    <div className="form-container">
      <h3>Nueva Meta</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button className="add-btn">
          ADD GOAL
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;