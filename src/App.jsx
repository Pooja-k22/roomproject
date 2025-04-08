import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pooja from './components/Pooja'
import Amala from './components/Amala'
import Aishwar from './components/Aishwar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pooja/>
     <Amala/>
     <Aishwar/>
    </>
  )
}

export default App
