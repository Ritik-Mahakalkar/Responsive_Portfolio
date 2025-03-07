
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nevigation from './Components/Nevigation/Nevigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nevigation/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Projects/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
