
import './App.css'

import { useSelector } from 'react-redux'

import { lazy, Suspense } from 'react'

const TodoForm = lazy(() => import('./Components/TodoForm'))
const TodoList = lazy(() => import('./Components/TodoList'))

function App() {
  const them = useSelector((state) => state.them)

  return (

    <Suspense fallback={
      <div className={`flex flex-col items-center justify-center h-screen  ${them === 'darkM' ? 'bg-blue-950' : 'bg-gray-100'}`}>
        <div className="loader"></div>
      </div>
    }>
      <div className={`flex flex-col items-center justify-center h-screen  ${them === 'darkM' ? 'bg-blue-950' : 'bg-gray-100'}`}>
        <TodoForm />
        <TodoList />
      </div >
    </Suspense>
  )
}

export default App

