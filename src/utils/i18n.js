import i18n, { changeLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Profile from '../components/Profile';

const resources = {
    es: {
        translation: {
            profile: 'Perfil',
            education: 'Educación',
            skills: 'Habilidades',
            home: 'Inicio',
            projects: 'Proyectos',
            contact: 'Contacto',
            changeLanguage: 'Cambiar idioma',
            changeTheme: 'Cambiar tema',
            working_text_h2: 'Esta vista aún no está optimizada para este tamaño de pantalla.',
            working_text_p: 'Por favor, prueba en una pantalla más grande.',
            contact_text_h2: '👋 ¡Hablemos!',
            contact_text_h4: 'No dudes en escribirme,<br/>estaré encantado de responderte.',
            popup_form_h2: '📩 Envíame un mensaje',
            popup_label_name: 'Nombre',
            popup_label_email: 'Correo',
            popup_label_subject: 'Asunto',
            popup_label_message: 'Mensaje',
            popup_btn_send: 'Enviar',
            popup_placeholder_name: 'Tu nombre',
            popup_placeholder_email: 'Tu correo',
            popup_placeholder_message: 'Escribe tu mensaje...',
            popup_character_limit: 'caracteres'

        }
    },
    en: {
        translation: {
            profile: 'Profile',
            education: 'Education',
            skills: 'Skills',
            home: 'Home',
            projects: 'Projects',
            contact: 'Contact',
            changeLanguage: 'Change language',
            changeTheme: 'Change theme',
            working_text_h2: 'This view is not yet optimized for this screen size.',
            working_text_p: 'Please test on a larger screen.',
            contact_text_h2: '👋 Let\'s talk!',
            contact_text_h4: 'Do not hesitate to write me,<br/>I will be happy to answer you.',
            popup_form_h2: '📩 Send me a message',
            popup_label_name: 'Name',
            popup_label_email: 'Email',
            popup_label_subject: 'Subject',
            popup_label_message: 'Message',
            popup_btn_send: 'Send',
            popup_placeholder_name: 'Your name',
            popup_placeholder_email: 'Your email',
            popup_placeholder_message: 'Write your message...',
            popup_character_limit: 'characters'
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') || 'es', // Idioma inicial
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
});

export default i18n;
