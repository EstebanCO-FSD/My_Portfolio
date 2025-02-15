import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import '@assets/css/PopupForm.css';

function PopupForm({ closePopup }) {
    let { t } = useTranslation();

    const getInitialTheme = () => {
        return localStorage.getItem('theme') === 'light';
    };

    const [isLightMode, setIsLightMode] = useState(getInitialTheme);

    // EmailJs Ids and Key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const maxChars = 500;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > maxChars) return;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
            toast.info(t('popup_error_empty_fields'), { theme: isLightMode ? 'light' : 'dark' });
            setIsLoading(false);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                formData,
                publicKey
            );
            
            toast.success(t('popup_success_message'), { theme: isLightMode ? 'light' : 'dark' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Email sending error:', error);
            toast.error(t('popup_error_message'), { theme: isLightMode ? 'light' : 'dark' });
        }

        setIsLoading(false);
    };

    return (
        <div className="popup-overlay">

            <ToastContainer />

            <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>✖</button>
                <h2>{t('popup_form_h2')}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>{t('popup_label_name')}</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('popup_placeholder_name')} required />
                        </div>
                        <div className="form-group">
                            <label>{t('popup_label_email')}</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('popup_placeholder_email')} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>{t('popup_label_subject')}</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={t('popup_label_subject')} required />
                    </div>

                    <div className="form-group">
                        <label>{t('popup_label_message')}</label>
                        <textarea
                            name="message"
                            placeholder={t('popup_placeholder_message')}
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={maxChars}
                            required
                        ></textarea>
                        <p className="char-count">{formData.message.length} / {maxChars} {t('popup_character_limit')}</p>
                    </div>

                    <div className="form-footer">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? t('popup_sending') : t('popup_btn_send')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopupForm;