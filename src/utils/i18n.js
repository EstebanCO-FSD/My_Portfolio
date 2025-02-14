import i18n, { changeLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';

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
            profile_text_role: 'Desarrollador Full-Stack | Consultor BTP',
            profile_text_about: 'Acerca de mí',
            profile_text_about_description: `
            Soy graduado en Bachillerato como Técnico en Programación de Software y Tecnólogo en Análisis y Desarrollo de Sistemas de Información. 
            Cuento con amplios conocimientos en bases de datos tanto relacionales (SQL) como no relacionales (NoSQL), y manejo diversos lenguajes de programación, 
            incluyendo JavaScript, Python y Java.
            <br/><br/>
            Mi enfoque se centra en la organización efectiva de prioridades y tiempos, lo que me permite trabajar de manera disciplinada y eficiente. 
            Poseo una fuerte capacidad analítica que me ayuda a resolver problemas complejos y a colaborar eficazmente en equipo.
            <br/><br/>
            Siempre estoy en busca de nuevas oportunidades para aprender y crecer en el campo de la tecnología. 
            Me apasiona adquirir nuevos conocimientos y estoy comprometido a utilizar mis habilidades para contribuir a proyectos innovadores.`,
            education_title: 'Educación',
            education_qualifications: 'Titulaciones',
            education_certifications: 'Certificaciones',
            education_see_more: 'Ver más',
            education_see_less: 'Ver menos',
            education_see_certification: 'Ver Certificado',
            education_final_note: '📖 Soy desarrollador de software con formación en Backend y Frontend. Me especializo en crear soluciones eficientes y escalables, siempre aprendiendo y mejorando mis habilidades.',
            skills_title: 'Habilidades',
            skills_text_backend: `
            Desarrollo soluciones backend enfocadas en el procesamiento de datos y la optimización del rendimiento. 
            Me especializo en la creación de servicios y APIs REST utilizando Python, Java y JavaScript (Node.js), 
            asegurando escalabilidad y eficiencia en la comunicación entre sistemas.
            <br /><br />
            Tengo experiencia en la gestión de bases de datos, tanto relacionales (SQL) como NoSQL (MongoDB), 
            implementando estructuras optimizadas para el almacenamiento y consulta de información. 
            Además, manejo la integración de datos a través de OData y el procesamiento de archivos JSON para estructurar información de manera eficiente.`,
            skills_text_frontend: `
            Utilizo HTML, CSS y JavaScript, priorizando la escritura de código estructurado y eficiente. 
            Me aseguro de que el frontend sea funcional y accesible, 
            pero mi enfoque principal está en la lógica y el rendimiento de las aplicaciones.
            <br /><br />
            En JavaScript, trabajo con la manipulación del DOM y la gestión de eventos, 
            principalmente para conectar el frontend con el backend de manera eficiente. 
            También me interesa la optimización del rendimiento y la integración con APIs.
            <br /><br />
            Siempre busco mejorar mis habilidades y mantenerme actualizado con nuevas tecnologías para desarrollar soluciones más robustas y escalables.`,
            working_text_h2: 'Esta vista aún no está optimizada para este tamaño de pantalla.',
            working_text_p: 'Por favor, prueba en una pantalla más grande.',
            projects_title: 'Proyectos',
            projects_text: '🚀 Explora mis proyectos y conoce mi trabajo. ¡Haz clic en cualquier tarjeta para verlo en acción!',
            projects_go: 'Ir al sitio',
            contact_text_h2: '👋 ¡Hablemos!',
            contact_text_h4: 'No dudes en escribirme,<br/>estaré encantado de responderte.',
            popup_form_h2: '📩 Envíame un mensaje',
            popup_label_name: 'Nombre',
            popup_label_email: 'Correo',
            popup_label_subject: 'Asunto',
            popup_label_message: 'Mensaje',
            popup_btn_send: 'Enviar',
            popup_sending: 'Enviando ...',
            popup_placeholder_name: 'Tu nombre',
            popup_placeholder_email: 'Tu correo',
            popup_placeholder_message: 'Escribe tu mensaje...',
            popup_character_limit: 'caracteres',
            popup_success_message: 'Su correo ha sido enviado con éxito.',
            popup_error_message: 'El envío del correo ha fallado. Te invito a contactarme a través de LinkedIn.',
            popup_error_empty_fields: 'Por favor, completa todos los campos antes de continuar.',
            last_update: 'Última actualización 📅 ( 14 de Feb 2025 )'
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
            profile_text_role: 'Full-Stack Developer | BTP Consultant',
            profile_text_about: 'About me',
            profile_text_about_description: `
            I have a Bachelor's degree as a Software Programming Technician and a Technologist in Analysis and Development of Information Systems. 
            I have extensive knowledge in both relational (SQL) and non-relational (NoSQL) databases, and I use various programming languages, 
            including JavaScript, Python and Java.
            <br/><br/>
            My approach focuses on the effective organization of priorities and times, which allows me to work in a disciplined and efficient manner. 
            I have strong analytical skills that help me solve complex problems and collaborate effectively as a team.
            <br/><br/>
            I am always looking for new opportunities to learn and grow in the technology field. 
            I am passionate about acquiring new knowledge and am committed to using my skills to contribute to innovative projects.`,
            education_title: 'Education',
            education_qualifications: 'Qualifications',
            education_certifications: 'Certifications',
            education_see_more: 'See more',
            education_see_less: 'See less',
            education_see_certification: 'See Certification',
            education_final_note: '📖 I am a software developer with training in Backend and Frontend. I specialize in creating efficient and scalable solutions, always learning and improving my skills.',
            skills_title: 'Skills',
            skills_text_backend: `
            I develop backend solutions focused on data processing and performance optimization. 
            I specialize in creating REST services and APIs using Python, Java and JavaScript (Node.js), 
            ensuring scalability and efficiency in communication between systems.
            <br /><br />
            I have experience in database management, both relational (SQL) and NoSQL (MongoDB), 
            implementing optimized structures for the storage and consultation of information. 
            Additionally, I handle data integration through OData and JSON file processing to structure information efficiently.`,
            skills_text_frontend: `
            I use HTML, CSS and JavaScript, prioritizing writing structured and efficient code. 
            I make sure the frontend is functional and accessible, 
            but my main focus is on application logic and performance.
            <br /><br />
            In JavaScript, I work with DOM manipulation and event management, 
            mainly to connect the frontend with the backend efficiently. 
            I am also interested in performance optimization and integration with APIs.
            <br /><br />
            I am always looking to improve my skills and stay up to date with new technologies to develop more robust and scalable solutions.`,
            working_text_h2: 'This view is not yet optimized for this screen size.',
            working_text_p: 'Please test on a larger screen.',
            projects_title: 'Projects',
            projects_text: '🚀 Explore my projects and check out my work. Click on any card to see it in action!',
            projects_go: 'Go to site',
            contact_text_h2: '👋 Let\'s talk!',
            contact_text_h4: 'Do not hesitate to write me,<br/>I will be happy to answer you.',
            popup_form_h2: '📩 Send me a message',
            popup_label_name: 'Name',
            popup_label_email: 'Email',
            popup_label_subject: 'Subject',
            popup_label_message: 'Message',
            popup_btn_send: 'Send',
            popup_sending: 'Sending ...',
            popup_placeholder_name: 'Your name',
            popup_placeholder_email: 'Your email',
            popup_placeholder_message: 'Write your message...',
            popup_character_limit: 'characters',
            popup_success_message: 'Your email has been sent successfully.',
            popup_error_message: 'The email has failed to be sent. Please contact me via LinkedIn.',
            popup_error_empty_fields: 'Please complete all fields before continuing.',
            last_update: 'Last update 📅 ( February 14, 2025 )'
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
