import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';

function App() {


  return (
    <>
      <div>
        <h1>Hello</h1>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}

export default App;
