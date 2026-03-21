import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Topbar } from './components/Topbar'
import { LeftCard } from './components/LeftCrad'
import { MainSection } from './components/MainSection'
import { RightCard } from './components/RightCard'



function App() {
  const [count, setCount] = useState(0)

  return (<>
  <div className="fixed top-0  w-full bg-white z-50 shadow">
    <Topbar />
  </div>
  <div className="grid grid-cols-12 gap-4 max-w-9xl mx-auto px-40  mt-20 ">
    <div className="col-span-2 ml-12"><LeftCard/></div>
    <div className="col-span-6 ml-22 "><MainSection/></div>
    <div className="col-span-4 ml-16"><RightCard/></div>
  </div>
  </>
  )
}

export default App
