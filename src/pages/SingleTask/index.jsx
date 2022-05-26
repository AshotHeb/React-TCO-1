import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../consts";

export const SingleTask = () => {
  const [singleTask, setSingleTask] = useState(null);

  const params = useParams();
  const taskId = params.taskId;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/task/${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleTask(data);
      });
  }, [taskId]);

  if (!singleTask) {
    return <div>Loading ... </div>;
  }

  return (
    <div>
      <h1>SingleTask Page</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>
        <p>{singleTask.title}</p>
        <p>{singleTask.description}</p>
      </div>
    </div>
  );
};
