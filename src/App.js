import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet',
        day: 'Mar 17th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Morbi sollicitudin ornare nunc',
        day: 'Mar 19th at 6:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Sit amet condimentum',
        day: 'Mar 21th at 8:30pm',
        reminder: false
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id , ...task}
  setTasks([...tasks, newTask])
 }
// Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Remainder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
 }
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask &&<AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
