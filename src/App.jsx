import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screen/Homescreen'
import Blogs from './components/Blog'

function App() {
  

  return (
    <div className='bg-[#F4F2F2] min-h-screen w-full top-0 '>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/blog" element={<Blogs/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
