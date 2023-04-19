import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'C:/Users/johnf/OneDrive/Documents/tsiwebsite2/src/components/navbar.js';
import Home from 'C:/Users/johnf/OneDrive/Documents/tsiwebsite2/src/components/home.js';
import HowSprinklersWork from './components/howsprinklerswork';
import Contact from './components/contactus';
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/how-sprinklers-work' element={<HowSprinklersWork/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </header>
      </Router>
    </div>
  );
}

export default App;
