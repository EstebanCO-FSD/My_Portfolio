import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';
//import RedirectOnResize from './components/RedirectOnResize.jsx';
import './utils/i18n';
import './assets/css/Main.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/UnderConstruction" element={<UnderConstruction />} />
        </Routes>
    </BrowserRouter>
)