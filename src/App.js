import './App.css';
import Navbar from 'C:/Users/johnf/OneDrive/Documents/tsiwebsite2/src/components/navbar.js';
import Home from 'C:/Users/johnf/OneDrive/Documents/tsiwebsite2/src/components/home.js';
import HowSprinklersWork from './components/howsprinklerswork';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* Home Page */}
        <Home/>
        <HowSprinklersWork/>
      </header>
    </div>
  );
}

export default App;
