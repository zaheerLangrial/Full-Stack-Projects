import './App.css'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-center text-4xl py-3 font-bold text-white bg-black'>Task Manager</h1>
      <AddTasks />
      <Tasks />
    </div>
  )
}

export default App
