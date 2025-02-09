import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
//import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import UnderConstruction from './pages/UnderConstruction.jsx'
import './assets/css/Main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<UnderConstruction />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
)

