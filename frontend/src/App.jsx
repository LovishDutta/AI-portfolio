import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Assistant from "./components/Assistant"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header/>}> 
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/achievements' element={<Achievements/>}/>
      <Route path='/assistant' element={<Assistant/>}/>
      </Route>
    </Routes>
  )
}

export default App
