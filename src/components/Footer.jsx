import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    let { t } = useTranslation();
    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "light");

    useEffect(() => {
        const handleThemeChange = () => setIsLightMode(localStorage.getItem("theme") === "light");
    
        window.addEventListener("themeChange", handleThemeChange);
        return () => window.removeEventListener("themeChange", handleThemeChange);
    }, []);  

    return (
        <div style={{width: '100%'}}>
            <span style={{ 
                display: 'inline-block', width: '95%', height: '1px', 
                background: isLightMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)', 
                margin: '0 0 5px 0', borderRadius: '1px' }}>
            </span>

            <div className="menu-logo">
                {isLightMode ? <img src="/logo-cap-b.png" alt="Logo" /> : <img src="/logo-cap-w.png" alt="Logo" />}
            </div>

            <p style={{ fontSize: '12px' }}>{t('last_update')} 📅 ( 10 de Feb 2025 )</p>
        </div>
    )
}

export default Footer