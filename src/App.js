import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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

const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
