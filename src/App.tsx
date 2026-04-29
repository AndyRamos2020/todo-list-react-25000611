import { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Formulario from "./components/form/Formulario";
import Item from "./components/item/item";
import "./App.scss";

function App() {
  const [view, setView] = useState("tasks");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Example task", date: "15/05/2026" },
    { id: 2, title: "Task 2", description: "Another task", date: "20/05/2026" }
  ]);

  const [goals, setGoals] = useState([
    { id: 1, title: "Goal 1", description: "Example goal", date: "15/05/2026" },
    { id: 2, title: "Goal 2", description: "Another goal", date: "20/05/2026" }
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const deleteGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link active={view === "tasks"} onClick={() => setView("tasks")}>
              Tasks
            </Nav.Link>
            <Nav.Link active={view === "goals"} onClick={() => setView("goals")}>
              Goals
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="main-container">
        <Row>
          <Col md={6}>
            <Formulario
              view={view}
              onAdd={(data) => {
                if (view === "tasks") {
                  setTasks([
                    ...tasks,
                    { id: Date.now(), ...data }
                  ]);
                } else {
                  setGoals([
                    ...goals,
                    { id: Date.now(), ...data }
                  ]);
                }
              }}
            />
          </Col>

          <Col md={6} className="cards-section">
            {view === "tasks" &&
              tasks.map((task) => (
                <Item
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  onDelete={() => deleteTask(task.id)}
                />
              ))}

            {view === "goals" &&
              goals.map((goal) => (
                <Item
                  key={goal.id}
                  title={goal.title}
                  description={goal.description}
                  date={goal.date}
                  onDelete={() => deleteGoal(goal.id)}
                />
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;