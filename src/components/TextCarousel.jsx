import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import '@assets/css/TextCarousel.css';

const TextCarousel = () => {
    let { t } = useTranslation();

    return (
        <div className="marquee-container">
            <Marquee gradient={false} speed={50}>
                <span className="dot-text">{t('text_carousel')}</span>
            </Marquee>
        </div>
    );
};

export default TextCarousel;