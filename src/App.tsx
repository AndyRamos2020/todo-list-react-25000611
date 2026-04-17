import { Container, Row, Col } from "react-bootstrap";
import Formulario from "./components/Form/Formulario";
import Item from "./components/Item/item";
import "./App.scss";

function App() {
  return (
    <Container fluid className="main-container">
      <Row>

        {/* FORMULARIO */}
        <Col md={6}>
          <Formulario />
        </Col>

        {/* TARJETAS */}
        <Col md={6} className="cards-section">
          <Item 
            title="Meta 1"
            description="Descripción 1"
            date="15/05/2026"
          />

          <Item 
            title="Meta 2"
            description="Otra meta importante"
            date="20/05/2026"
          />
        </Col>

      </Row>
    </Container>
  );
}

export default App;