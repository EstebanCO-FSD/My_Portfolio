import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';
import imgProfile from '../assets/img/profile.png';
import '../assets/css/Profile.css';

function Profile() {
    let { t } = useTranslation();
    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "light");

    useEffect(() => {
        const handleThemeChange = () => {
            const newTheme = localStorage.getItem("theme");
            setIsLightMode(newTheme === "light");
        };
    
        window.addEventListener("themeChange", handleThemeChange);
    
        if (isLightMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    
        return () => { window.removeEventListener("themeChange", handleThemeChange); };
    }, [isLightMode]);
    
    return (
        <div className="profile-container">        
            <div className="profile-subcontainer">
                <div className="profile-image">
                    <img src={imgProfile} alt="Profile" />
                </div>

                <div className="profile-info">
                    <h1>Esteban Castellar Ochoa</h1>
                    <p>{t('profile_text_role')}</p>

                    <div className="profile-links">
                        <a href="https://www.linkedin.com/in/esteban-jose-castellar-ochoa" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" size={35} title="LinkedIn" />
                        </a>

                        <a href="https://github.com/EstebanCO-FSD" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" size={35} title="github" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="profile-description">
                <h2>{t('profile_text_about')}</h2>
                <p><Trans i18nKey="profile_text_about_description" /></p>
            </div>
        </div>
    );
}

export default Profile;