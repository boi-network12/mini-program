import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import WifiSpeed from './application/wifi-speed/wifi';
import Translator from './application/translator/translator';
import SignatureDesign from './application/signatureDesign/signature';
import WorldClock from './application/worldClock/worldClock';
import MedalTable from './application/Medal-table/MedalTable';

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
        <Route path="/world-clock" element={<WorldClock />} />
        <Route path="/medal-table" element={<MedalTable />} />
      </Routes>
    </Router>
  );
}

export default App;
