import { useEffect, useState } from 'react';
import { LuArrowUp } from 'react-icons/lu';
import '../assets/css/Menu.css';

export default function ScrollToTopButton() {
    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "light");
    let [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleThemeChange = () => setIsLightMode(localStorage.getItem("theme") === "light");
    
        window.addEventListener("themeChange", handleThemeChange);
        return () => window.removeEventListener("themeChange", handleThemeChange);
    }, []);  

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <LuArrowUp size={24} color={isLightMode ? "white" : "black"} />
            </button>
        )
    );
}