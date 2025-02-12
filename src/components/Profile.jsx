import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import imgProfile from '../assets/img/profile.png';
import '../assets/css/Profile.css';

function Profile() {
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
                    <p>Desarrollador Full-Stack | Consultor BTP</p>

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
                <h2>Acerca de mí</h2>
                <p>
                    Soy graduado en Bachillerato como Técnico en Programación de Software y Tecnólogo en Análisis y Desarrollo de Sistemas de Información. Cuento con amplios conocimientos en bases de datos tanto relacionales (SQL) como no relacionales (NoSQL), y manejo diversos lenguajes de programación, incluyendo JavaScript, Python y Java.
                    <br/><br/>
                    Mi enfoque se centra en la organización efectiva de prioridades y tiempos, lo que me permite trabajar de manera disciplinada y eficiente. Poseo una fuerte capacidad analítica que me ayuda a resolver problemas complejos y a colaborar eficazmente en equipo.
                    <br/><br/>
                    Siempre estoy en busca de nuevas oportunidades para aprender y crecer en el campo de la tecnología. Me apasiona adquirir nuevos conocimientos y estoy comprometido a utilizar mis habilidades para contribuir a proyectos innovadores.
                </p>
            </div>
        </div>
    );
}

export default Profile;