import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import Track from './components/track';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Track/>
      <About/>
      <Contact/>
      <Footer/>
     
      {/* <Routes>
        <Route path='/services' element={<Services/>}/>
      </Routes> */}

    </div>
  );
}

export default App;
