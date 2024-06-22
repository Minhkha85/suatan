import logo from './logo.svg';
import './App.css';
import QRScanner from './component/QRsanner.jsx'; 
import Nav from './component/nav.js'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Suatan from './component/client.jsx';
import NavTabs from './component/NavTabs.jsx';
function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavTabs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
