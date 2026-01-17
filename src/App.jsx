import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homescreen from './screen/Homescreen'
import Blogs from './components/Blog'
import AddBlog from './components/AddBlog'

function App() {
  

  return (
    <div className='bg-[#F4F2F2] min-h-screen w-full top-0 '>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/addblog" element={<AddBlog/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
