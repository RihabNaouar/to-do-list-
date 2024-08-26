import './TaskForm.css'
import React, { useState } from 'react';
const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskNumber, setTaskNumber] = useState(1);

 const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert('Both fields are required');
      return;
    }
    
    const newTask = { name: taskName, description: taskDescription , number: taskNumber };
    setTasks([...tasks, newTask]); // Ajoute la nouvelle tâche à la liste des tâches
    setTaskName('');
    setTaskDescription('');
    setTaskNumber  (taskNumber+1);
  };

    return(
      <div>
      <form onSubmit={handleSubmit}>
        <div className="theForm">
        <label htmlFor="taskName"></label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Add The Task Name"
          />
        </div>
        <div className='theForm'>
        <label htmlFor="taskDescription">:</label>
          <input
            type="text"
            id="taskDescription"
            placeholder="Add The Tas description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
      {/* Affichage des tâches */
      <div className="taskList"> {tasks.map((task,index) => (
          <div key={index} className="taskItem">
            <h3>Task{task.number}: {task.name}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default TaskForm;