import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import SocPatet from "./components/socPatet";
import AboutUs from "./components/about";
import CallBack from "./components/callBack";


function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/socPatet" element={<SocPatet />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/callBack" element={<CallBack />} />
            </Routes>
    );
}

export default App;


