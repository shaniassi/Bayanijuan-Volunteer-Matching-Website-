import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Opportunities1 from './components/Opportunities/Opportunities1'
import Opportunities2 from './components/Opportunities/Opportunities2'
import Blog1 from './components/Blog/Blog1'
import Stats from './components/Stats'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    {/* <div className='bg-cream w-full h-screen'></div> */}
    <Opportunities1 />
    <Opportunities2 />
    <Blog1 />
    <Stats />
    <div className='w-full h-10 bg-rose'></div>
    <Footer />
    </>
  )
}

export default App
