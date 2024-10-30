import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import WifiSpeed from './application/wifi-speed/wifi';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wifi-speed" element={<WifiSpeed />} />
      </Routes>
    </Router>
  );
}

export default App;
