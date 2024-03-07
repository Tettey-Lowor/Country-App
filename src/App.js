import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Countrypage from './Pages/Countrypage';
import Countriespage from './Pages/Countriespage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Countrypage/:countryName" element={<Countrypage />}></Route>
    <Route path="/Countries" element={<Countriespage />}></Route>
   
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
