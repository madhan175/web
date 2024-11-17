import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Settings = () => {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState(0);
  const { addTopic } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTopic({ topic, duration });
    setTopic("");
    setDuration(0);
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>Topic:</label>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <label>Duration (min):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
