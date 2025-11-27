import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSelector } from 'react-redux';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <>
      <div>
        <h1>Hello</h1>
        <TaskList />
        <TaskForm />
      </div>
    </>
  );
}

export default App;
