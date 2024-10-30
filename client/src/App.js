import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import WifiSpeed from './application/wifi-speed/wifi';
import Translator from './application/translator/translator';
import SignatureDesign from './application/signatureDesign/signature';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wifi-speed" element={<WifiSpeed />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/signature-design" element={<SignatureDesign />} />
      </Routes>
    </Router>
  );
}

export default App;
