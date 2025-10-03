
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import { useSelector } from 'react-redux'
import EditInput from './Components/EditInput'
import Modal from './Components/Modal'

function App() {
  const them = useSelector((state)=>state.them)

  return (

    <div className={`flex flex-col items-center justify-center h-screen  ${them === 'darkM' ? 'bg-blue-950' : 'bg-gray-100' }`}>
      <EditInput />
      <Modal/>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
