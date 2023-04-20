import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home';
import AboutUs from "./components/aboutUs";
import CallBack from "./components/callBack";
import SocialPackages from './components/socialPackages';
import VayocDzor from './components/vayocDzor';
import Aragacotn from './components/aragacotn';
import Tavush from './components/tavush';
import Lori from './components/lori';
import Kotayq from './components/kotayq';
import Arcax from './components/arcax';





function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/socialPackages" element={<SocialPackages />} />
                <Route path="/aboutUs" element={<AboutUs />} />
			 <Route path="/callBack" element={<CallBack />} />
			 <Route path="/vayocDzor" element={<VayocDzor />} />
			 <Route path="/aragacotn" element={<Aragacotn />} />
			 <Route path="/tavush" element={<Tavush />} />
			 <Route path="/lori" element={<Lori />} />
			 <Route path="/kotayq" element={<Kotayq />} />
			 <Route path="/arcax" element={<Arcax />} />

            </Routes>
    );
}

export default App;


