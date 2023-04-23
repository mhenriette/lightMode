import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function App() {
  const [turn, setTurn] = useState(true)
  function showState() {
    setTurn(prevturn => !prevturn)

  }


  return (
    <div className={`App h-screen w-full  ${turn ? 'bg-white text-black' : 'bg-[#282D35] text-white'}`}>
      <Navbar onturn={showState} current={turn} />
      <Main current={turn} />
    </div>
  )
}

export default App
