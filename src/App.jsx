import Navbar from "./components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Home,
  Contact,
  About
} from './components';
import './App.css';


function App() {

  return (
  <BrowserRouter>
    <div className="container">
      <Navbar />   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
