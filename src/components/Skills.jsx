import Carousel from '../components/Carousel';
import { useTranslation, Trans } from 'react-i18next';
import '../assets/css/Skills.css';

function Skills() {
    let { t } = useTranslation();

    return (
        <div className="skills-container">
            <h2>{t('skills_title')}</h2>

            <div className="skills-section">
                <div className="left-text">                
                    <h3>Back-End</h3>
                    <p><Trans i18nKey="skills_text_backend" /></p>
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
                    <p><Trans i18nKey="skills_text_frontend" /></p>
                </div>
            </div>
        </div>
    );
}

export default Skills