import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import AboutUs from "./components/aboutUs";
import CallBack from "./components/callBack";
import SocialPackages from './components/socialPackages';


function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/socialPackages" element={<SocialPackages />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/callBack" element={<CallBack />} />
            </Routes>
    );
}

export default App;


