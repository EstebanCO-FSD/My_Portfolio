import { Link, useLocation } from 'react-router-dom';
import { LuLanguages, LuSun, LuMoon } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import '../assets/css/Menu.css';

export default function Menu() {
    let location = useLocation();
    let currentPath = location.pathname;
    
    const getInitialTheme = () => {
        return localStorage.getItem('theme') === 'ligth';
    };

    const [isLightMode, setIsLightMode] = useState(getInitialTheme);

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('ligth-mode');
        } else {
            document.body.classList.remove('ligth-mode');
        }
    }, [isLightMode]);
    
    const toggleTheme = () => {
        const newTheme = !isLightMode;
        setIsLightMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'ligth' : 'dark');
        window.dispatchEvent(new Event("themeChange"));
    };    

    return (
        <nav className="menu-bar">
            <div className="menu-logo">
                <Link to="/">
                    {isLightMode ? <img src="/logo-cap-b.png" alt="Logo" /> : <img src="/logo-cap-w.png" alt="Logo" />}
                </Link>
            </div>

            <ul className="menu-nav">
                {currentPath !== "/" && <li><Link to="/">Inicio</Link></li>}
                {currentPath !== "/Projects" && <li><Link to="/Projects">Proyectos</Link></li>}
                {currentPath !== "/Contact" && <li><Link to="/Contact">Contacto</Link></li>}

                <li><span className="menu-separator"></span></li>

                <li><Link to="#"><LuLanguages size={20} /></Link></li>
                <li>
                    <Link to="#" onClick={toggleTheme}>
                        {isLightMode ? <LuSun size={20} /> : <LuMoon size={20} />}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}