import { Card, Button } from "react-bootstrap";
import "./item.scss";

type ItemProps = {
  title: string;
  description: string;
  date: string;
};

const Item = ({ title, description, date }: ItemProps) => {
  return (
    <Card className="item-card">
      <Card.Body className="item-body">
        <h3 className="item-title">{title}</h3>

        <p className="item-label">Descripción</p>
        <p>{description}</p>

        <p className="item-label">Fecha de Vencimiento</p>
        <p>{date}</p>

        <Button className="item-btn">Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;