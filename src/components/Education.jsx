import React, { useState } from 'react';
import educationData from '../utils/educationData';
import { useTranslation } from 'react-i18next';
import '@assets/css/Education.css';

function Education() {
    let { t, i18n } = useTranslation();

    const [showAllCertifications, setShowAllCertifications] = useState(false);
    const certifications = educationData.find(section => section.type === "Certificaciones")?.items || [];
    const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, 3);

    return (
        <div className="education-container">
            <h2>{t('education_title')}</h2>

            <div className="timeline">
                <div className="timeline-left">
                    <h3>{t('education_qualifications')}</h3>

                    <div className="lineal-timeline">
                        {educationData.find(section => section.type === "Titulaciones")?.items.map((item, idx) => (
                            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'right' : 'left'}`}>
                                <span className="name">{item.name[i18n.language]}</span>
                                <span className="education_level">{item.education_level[i18n.language]}</span>
                                <span className="year">{typeof item.year === "object" ? item.year[i18n.language] : item.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="timeline-right">
                    <h3>{t('education_certifications')}</h3>

                    <div className="lineal-timeline">
                        {visibleCertifications.map((item, idx) => (
                            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'right' : 'left'}`}>
                                <span className="name">{item.name}</span>
                                <span className="year">{item.year}</span>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cert-button">
                                        {t('education_see_certification')}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {certifications.length > 3 && (
                        <button className="expand-button" onClick={() => setShowAllCertifications(!showAllCertifications)}>
                            {showAllCertifications ? t('education_see_less') : t('education_see_more')}
                        </button>
                    )}
                </div>
            </div>

            <p className="note">{t('education_final_note')}</p>
        </div>
    );
}

export default Education;