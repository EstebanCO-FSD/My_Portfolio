import { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import { FaLinkedin } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import PopupForm from '../components/PopupForm';
import '../assets/css/Contact.css';

function Contact() {
    let [isPopupOpen, setIsPopupOpen] = useState(false);
    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "ligth");

    let togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        const handleThemeChange = () => setIsLightMode(localStorage.getItem("theme") === "ligth");
    
        window.addEventListener("themeChange", handleThemeChange);
        return () => window.removeEventListener("themeChange", handleThemeChange);
    }, []);     

    return (
        <div>
            <Menu />
            <div className="contact-container">
                <div className="contact-container-left">
                    <h2>👋 ¡Hablemos!</h2>
                    <h4>No dudes en escribirme, estaré encantado de responderte.</h4>
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
