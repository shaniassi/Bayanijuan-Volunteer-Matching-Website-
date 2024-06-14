import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Opportunities1 from './components/Opportunities/Opportunities1'
import Opportunities2 from './components/Opportunities/Opportunities2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    {/* <div className='bg-cream w-full h-screen'></div> */}
    <Opportunities1 />
    <Opportunities2 />
    </>
  )
}

export default App
