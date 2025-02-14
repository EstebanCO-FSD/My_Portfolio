import { useTranslation } from 'react-i18next';
import workingImage from '@assets/img/working.png';
import '@assets/css/UnderConstruction.css';

function UnderConstruction() {
    let { t } = useTranslation();

    return (
        <div>
            <div className="construction-container">
                <img src={workingImage} alt="Página en construcción" className="construction-image" />
                <h2>{t('working_text_h2')}</h2>
                <p>{t('working_text_p')}</p>
            </div>
        </div>
    );
}

export default UnderConstruction;
