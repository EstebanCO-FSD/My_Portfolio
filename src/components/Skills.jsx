import Carousel from '../components/Carousel';
import '../assets/css/Skills.css';

function Skills() {
    return (
        <div className="skills-container">
            <h2>Habilidades</h2>

            <div className="skills-section">
                <div className="left-text">                
                    <h3>Back-End</h3>
                    <p>
                    Desarrollo soluciones backend enfocadas en el procesamiento de datos y la optimización del rendimiento. 
                    Me especializo en la creación de servicios y APIs REST utilizando Python, Java y JavaScript (Node.js), 
                    asegurando escalabilidad y eficiencia en la comunicación entre sistemas.
                    <br /><br />
                    Tengo experiencia en la gestión de bases de datos, tanto relacionales (SQL) como NoSQL (MongoDB), 
                    implementando estructuras optimizadas para el almacenamiento y consulta de información. 
                    Además, manejo la integración de datos a través de OData y el procesamiento de archivos JSON para estructurar información de manera eficiente.
                    </p>
                </div>
                <div className="carousel-container">
                    <Carousel category="backend" />
                </div>
            </div>

            <div className="skills-section">
                <div className="carousel-container">
                    <Carousel category="frontend" />
                </div>
                <div className="right-text">
                    <h3>Front-End</h3>
                    <p>
                    Utilizo HTML, CSS y JavaScript, priorizando la escritura de código estructurado y eficiente. 
                    Me aseguro de que el frontend sea funcional y accesible, 
                    pero mi enfoque principal está en la lógica y el rendimiento de las aplicaciones.
                    <br /><br />
                    En JavaScript, trabajo con la manipulación del DOM y la gestión de eventos, 
                    principalmente para conectar el frontend con el backend de manera eficiente. 
                    También me interesa la optimización del rendimiento y la integración con APIs.
                    <br /><br />
                    Siempre busco mejorar mis habilidades y mantenerme actualizado con nuevas tecnologías para desarrollar soluciones más robustas y escalables.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills