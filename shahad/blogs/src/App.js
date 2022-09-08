import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AddBlog from './pages/AddBlog';
import BlogDetails from './pages/BlogDetails';
function App() {
  return (
  
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path='/details/:id' element={<BlogDetails />} />
      </Routes>
      </BrowserRouter>
     
   
  );
}

export default App;
