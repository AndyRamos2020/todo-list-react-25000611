import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGoals } from "../redux/goalSlice";
import type { RootState } from "../redux/store.ts";
import { Button, Card } from "react-bootstrap";

interface Goal {
  _id: string;
  name: string;
  description: string;
  duedate: string;
}

export default function Goals() {
  const dispatch = useDispatch();

  const goals = useSelector(
    (state: RootState) => state.goals
  );

  const loadGoals = async () => {
    const res = await axios.get(
      "http://localhost:3000/goals/getGoals",
      {
        headers: {
          Authorization: "123456",
        },
      }
    );

    dispatch(setGoals(res.data));
  };

  const deleteGoal = async (id: string) => {
    await axios.delete(
      `http://localhost:3000/goals/removeGoal/${id}`,
      {
        headers: {
          Authorization: "123456",
        },
      }
    );

    loadGoals();
  };

  useEffect(() => {
    loadGoals();
  }, []);

  return (
    <>
      <h2>Metas</h2>

      {goals.map((goal: Goal) => (
        <Card key={goal._id} className="mb-3">
          <Card.Body>
            <h4>{goal.name}</h4>
            <p>{goal.description}</p>
            <p>{goal.duedate}</p>

            <Button
              variant="danger"
              onClick={() =>
                deleteGoal(goal._id)
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