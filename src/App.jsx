
import './App.css'

import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react'

const TodoForm = lazy(() => import('./Components/TodoForm'))
const TodoList = lazy(() => import('./Page/TodoList'))
const FolderList = lazy(() => import('./Page/FolderList'))
const NotFound = lazy(() => import('./Page/NotFound'))

function App() {
  const them = useSelector((state) => state.them)

  return (

    <Suspense fallback={
      <div className={`flex flex-col items-center justify-center h-screen  ${them === 'darkM' ? 'bg-blue-950' : 'bg-gray-100'}`}>
        <div className="loader"></div>
      </div>
    }>

      <div className={`flex flex-col items-center justify-center h-screen  ${them === 'darkM' ? 'bg-blue-950' : 'bg-gray-100'}`}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FolderList />} />
            <Route path='/folder/:type' element={<TodoList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div >
    </Suspense>
  )
}

export default App

