import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/css/PopupForm.css';

function PopupForm({ closePopup }) {
    let { t } = useTranslation();

    const [message, setMessage] = useState('');
    const maxChars = 500;

    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "light");

    const handleChange = (e) => {
        if (e.target.value.length <= maxChars) {
            setMessage(e.target.value);
        }
    };

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
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>✖</button>
                <h2>{t('popup_form_h2')}</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>{t('popup_label_name')}</label>
                            <input type="text" placeholder={t('popup_placeholder_name')} required />
                        </div>
                        <div className="form-group">
                            <label>{t('popup_label_email')}</label>
                            <input type="email" placeholder={t('popup_placeholder_email')} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>{t('popup_label_subject')}</label>
                        <input type="text" placeholder={t('popup_label_subject')} required />
                    </div>

                    <div className="form-group">
                        <label>{t('popup_label_message')}</label>
                        <textarea
                            placeholder={t('popup_placeholder_message')}
                            value={message}
                            onChange={handleChange}
                            maxLength={maxChars}
                            required
                        ></textarea>
                        <p className="char-count">{message.length} / {maxChars} {t('popup_character_limit')}</p>
                    </div>

                    <div className="form-footer">
                        <button type="submit">{t('popup_btn_send')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopupForm