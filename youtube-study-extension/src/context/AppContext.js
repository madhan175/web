import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [progress, setProgress] = useState(0);

  const addTopic = (topic) => setTopics([...topics, topic]);
  const addTask = (task) => setTasks([...tasks, task]);
  const markComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    updateProgress(updatedTasks);
  };

  const updateProgress = (updatedTasks) => {
    const completedTasks = updatedTasks.filter((task) => task.completed).length;
    const progress = (completedTasks / updatedTasks.length) * 100;
    setProgress(progress);
  };

  return (
    <AppContext.Provider
      value={{ tasks, topics, progress, addTopic, addTask, markComplete }}
    >
      {children}
    </AppContext.Provider>
  );
};
