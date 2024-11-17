import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TaskManager = () => {
  const { tasks, markComplete } = useContext(AppContext);

  return (
    <div>
      <h1>Task Manager</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          <p>{task.name}</p>
          <button onClick={() => markComplete(task.id)}>Mark Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskManager;
