import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Formulario from "./components/form/Formulario";
import Item from "./components/item/item";
import "./App.scss";

function App() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Tareas</Nav.Link>
            <Nav.Link href="#">Metas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Container fluid className="main-container">
        <Row>
          <Col md={6}>
            <Formulario />
          </Col>

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
    </>
  );
}

export default App;