import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screen/Homescreen'

function App() {
  

  return (
    <div className='bg-[#F4F2F2] min-h-screen w-full top-0 '>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
