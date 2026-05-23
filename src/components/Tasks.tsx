import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/taskSlice.ts";
import type { RootState } from "../redux/store.ts";
import { Button, Card } from "react-bootstrap";

interface Task {
  _id: string;
  name: string;
  description: string;
  duedate: string;
}

export default function Tasks() {
  const dispatch = useDispatch();

  const tasks = useSelector(
    (state: RootState) => state.tasks
  );

  const loadTasks = async () => {
    const res = await axios.get(
      "http://localhost:3000/tasks/getTasks",
      {
        headers: {
          Authorization: "123456",
        },
      }
    );

    dispatch(setTasks(res.data));
  };

  const deleteTask = async (id: string) => {
    await axios.delete(
      `http://localhost:3000/tasks/removeTask/${id}`,
      {
        headers: {
          Authorization: "123456",
        },
      }
    );

    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h2>Tareas</h2>

      {tasks.map((task: Task) => (
        <Card key={task._id} className="mb-3">
          <Card.Body>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p>{task.duedate}</p>

            <Button
              variant="danger"
              onClick={() =>
                deleteTask(task._id)
              }
            >
              Eliminar
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}