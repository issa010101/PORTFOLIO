import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasks.forEach((task) => {
      const taskTime = new Date(`${task.date}T${task.time}`);
      const reminderTime = taskTime.getTime() - Date.now() - 10 * 60 * 1000;

      if (reminderTime > 0) {
        const reminderId = setTimeout(() => {
          alert(`Reminder: ${task.text} at ${taskTime.toLocaleString()}`);
        }, reminderTime);
        return () => clearTimeout(reminderId);
      }
    });
  }, [tasks]);

  const handleAddTask = () => {
    if (task && date && time) {
      setTasks([...tasks, { text: task, date, time, location, color, completed: false }]);
      setTask('');
      setDate('');
      setTime('');
      setLocation('');
      setColor('#ffffff');
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className={`task ${task.completed ? 'completed' : ''}`} style={{ backgroundColor: task.color }}>
            <span>{task.text} - {task.date} {task.time}</span>
            <button onClick={() => handleCompleteTask(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
      <h2>Completed Tasks</h2>
      <div className="task-list">
        {tasks.filter(task => task.completed).map((task, index) => (
          <div key={index} className="task completed">
            <span>{task.text} - {task.date} {task.time}</span>
            <button onClick={() => handleCompleteTask(index)}>Undo</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
