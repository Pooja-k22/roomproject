import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pooja from './components/Pooja'
import Amala from './components/Amala'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pooja/>
     <Amala/>
    </>
  )
}

export default App
