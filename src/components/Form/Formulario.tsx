import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./form.scss";

type Props = {
  view: string;
  onAdd: (data: {
    title: string;
    description: string;
    date: string;
  }) => void;
};

const Formulario = ({ view, onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;

    onAdd({ title, description, date });

    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="form-container">
      <h3>{view === "tasks" ? "New Task" : "New Goal"}</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="add-btn">
          {view === "tasks" ? "ADD TASK" : "ADD GOAL"}
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;