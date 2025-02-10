import { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import { FaLinkedin } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import PopupForm from '../components/PopupForm';
import { useTranslation, Trans } from 'react-i18next';
import '../assets/css/Contact.css';

function Contact() {
    let { t,  } = useTranslation();
    let [isPopupOpen, setIsPopupOpen] = useState(false);
    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "light");

    let togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        const handleThemeChange = () => setIsLightMode(localStorage.getItem("theme") === "light");
    
        window.addEventListener("themeChange", handleThemeChange);
        return () => window.removeEventListener("themeChange", handleThemeChange);
    }, []);     

    return (
        <div>
            <Menu />
            <div className="contact-container">
                <div className="contact-container-left">
                    <h2>{t('contact_text_h2')}</h2>
                    <h4><Trans i18nKey="contact_text_h4" /></h4>
                </div>
                <div className="contact-container-rigth">
                    <a href="https://www.linkedin.com/in/esteban-jose-castellar-ochoa" target="_blank">
                        <FaLinkedin className="contact-btn" size={150} color={isLightMode ? "black" : "white"} />
                    </a>

                    <a href="#" onClick={(e) => { e.preventDefault(); togglePopup(); }}>
                        <RiMailSendLine className="contact-btn" size={150} color={isLightMode ? "black" : "white"} />
                    </a>
                </div>
            </div>

            {isPopupOpen && <PopupForm closePopup={togglePopup} />}
        </div>
    );
}

export default Contact;
