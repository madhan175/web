import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Popup = () => {
  const { tasks, progress } = useContext(AppContext);

  return (
    <div>
      <h1>YouTube Study Extension</h1>
      <a href="settings.html" target="_blank">Configure Settings</a>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
      <h2>Progress</h2>
      <p>{progress}% Completed</p>
    </div>
  );
};

export default Popup;
