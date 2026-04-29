import { Card, Button } from "react-bootstrap";
import "./item.scss";

type ItemProps = {
  title: string;
  description: string;
  date: string;
  onDelete: () => void;
};

const Item = ({ title, description, date, onDelete }: ItemProps) => {
  return (
    <Card className="item-card">
      <Card.Body className="item-body">
        <h3 className="item-title">{title}</h3>

        <p className="item-label">Descripción</p>
        <p className="item-text">{description}</p>

        <p className="item-label">Fecha de Vencimiento</p>
        <p className="item-date">{date}</p>

        <Button className="item-btn" onClick={onDelete}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;