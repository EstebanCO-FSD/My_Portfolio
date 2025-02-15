import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '@components/Menu';
import Footer from '@components/Footer';
import ScrollToTopButton from '@components/ScrollToTopButton';
import projectsData from '@utils/projectsData';
import '@assets/css/Projects.css';

function Projects() {
    let { t, i18n } = useTranslation();

    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            const loadedImages = await Promise.all(projectsData.map(async ({ id, image }) => {
                try {
                    return { [id]: (await import(`@assets/img/projects/${image}.png`)).default };
                } catch (error) {
                    console.error(`Error al cargar la imagen ${image}:`, error);
                    return {};
                }
            }));
            setImages(Object.assign({}, ...loadedImages));
        })();
    }, [projectsData]);

    return (
        <div>
            <Menu />
            <div className="projects-header">
                <h2>{t('projects_title')}</h2>
                <p>{t('projects_text')}</p>
            </div>

            <div className="projects-container">
                {projectsData.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="image-container">
                            <img src={images[project.id]} alt={project.name} />

                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech">{tech}</span>
                                ))}
                            </div>

                            <div className="overlay" onClick={() => window.open(project.url, "_blank")}>
                                <span>{t('projects_go')}</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description[i18n.language]}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default Projects;