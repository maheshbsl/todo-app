import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodos } from './components/CreateTodos'
import './App.css'
import { Todos } from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <CreateTodos></CreateTodos>
       <Todos></Todos>
      </div>
     
    </>
  )
}

export default App
