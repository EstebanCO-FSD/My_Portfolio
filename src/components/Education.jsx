import { useState } from "react";
import "../assets/css/Education.css";
import educationData from "../utils/educationData";

function Education() {
    const [showAllCertifications, setShowAllCertifications] = useState(false);

    const certifications = educationData.find(section => section.type === "Certificaciones")?.items || [];
    const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, 3);

    return (
        <div className="education-container">
            <h2>Educación</h2>

            <div className="timeline">
                <div className="timeline-left">
                    <h3>Titulaciones</h3>

                    <div className="snake-timeline">
                        {educationData.find(section => section.type === "Titulaciones")?.items.map((item, idx) => (
                            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'right' : 'left'}`}>
                                <span className="name">{item.name}</span>
                                <span className="education_level">{item.education_level}</span>
                                <span className="year">{item.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="timeline-right">
                    <h3>Certificaciones</h3>

                    <div className="snake-timeline">
                        {visibleCertifications.map((item, idx) => (
                            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'right' : 'left'}`}>
                                <span className="name">{item.name}</span>
                                <span className="year">{item.year}</span>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cert-button">
                                        Ver Certificado
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {certifications.length > 3 && (
                        <button className="expand-button" onClick={() => setShowAllCertifications(!showAllCertifications)}>
                            {showAllCertifications ? "Ver menos" : "Ver más"}
                        </button>
                    )}
                </div>
            </div>

            <p className="note">📖 Soy desarrollador de software con formación en Backend y Frontend. Me especializo en crear soluciones eficientes y escalables, siempre aprendiendo y mejorando mis habilidades.</p>
        </div>
    );
}

export default Education