import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home1 from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home1 />
    {/* <div className='bg-cream w-full h-screen'></div> */}
    </>
  )
}

export default App
