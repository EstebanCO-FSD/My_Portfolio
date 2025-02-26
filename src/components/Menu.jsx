import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuLanguages, LuSun, LuMoon } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import TextCarousel from './TextCarousel';
import 'react-toastify/dist/ReactToastify.css';
import '@assets/css/Menu.css';
import es from '@utils/languages/es';
import en from '@utils/languages/en';

function Menu({ profileRef, educationRef, skillsRef }) {
    let location = useLocation();
    let currentPath = location.pathname;
    let { t, i18n } = useTranslation();

    const isLocalStorageAvailable = (() => {
        try {
            localStorage.setItem("__test", "test");
            localStorage.removeItem("__test");
            return true;
        } catch (e) {
            return false;
        }
    })();

    const getInitialLanguage = () => {
        if (isLocalStorageAvailable) {
            return localStorage.getItem("language") || "es";
        }
        
        return "es";
    };

    const getInitialTheme = () => {
        return localStorage.getItem('theme') === 'light';
    };

    const [isLightMode, setIsLightMode] = useState(getInitialTheme);
    const [language, setLanguage] = useState(getInitialLanguage);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language") || "es";
        if (storedLanguage !== language) {
            setLanguage(storedLanguage);
            i18n.changeLanguage(storedLanguage);
        }
    }, []);
    

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [isLightMode]);

    const toggleTheme = () => {
        const newTheme = !isLightMode;
        setIsLightMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'light' : 'dark');
        window.dispatchEvent(new Event("themeChange"));
    };

    const toggleLanguage = () => {
        const newLanguage = language === "es" ? "en" : "es";
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
        toast.info(es.changeLanguageTooltip + "\n\n" + en.changeLanguageTooltip, { 
            theme: isLightMode ? 'light' : 'dark',
            style: { fontSize: '12px', whiteSpace: 'pre-line' }
        });
    };    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (ref, event) => {
        event.preventDefault();
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <ToastContainer />
            
            <nav className="menu-bar">
                <div className="menu-logo">
                    <Link to="/">
                        {isLightMode ? <img src="/logo-cap-b.png" alt="Logo" /> : <img src="/logo-cap-w.png" alt="Logo" />}
                    </Link>
                </div>

                <TextCarousel />

                <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`menu-nav ${isMenuOpen ? 'open' : ''}`}>
                    {currentPath !== "/Projects" && currentPath !== "/Contact" && (
                        <>
                            <li><a href="#" onClick={(e) => scrollToSection(profileRef, e)}>{t('profile')}</a></li>
                            <li><a href="#" onClick={(e) => scrollToSection(educationRef, e)}>{t('education')}</a></li>
                            <li><a href="#" onClick={(e) => scrollToSection(skillsRef, e)}>{t('skills')}</a></li>
                            <li><span className="menu-separator"></span></li>
                        </>
                    )}

                    {currentPath !== "/" && <li><Link to="/">{t('home')}</Link></li>}
                    {currentPath !== "/Projects" && <li><Link to="/Projects">{t('projects')}</Link></li>}
                    {currentPath !== "/Contact" && <li><Link to="/Contact">{t('contact')}</Link></li>}

                    <li><span className="menu-separator"></span></li>
                    <li>
                        <Link to="#" onClick={toggleLanguage} title={t('changeLanguage')}>
                            <LuLanguages size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link to="#" onClick={toggleTheme} title={t('changeTheme')}>
                            {isLightMode ? <LuSun size={20} /> : <LuMoon size={20} />}
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;