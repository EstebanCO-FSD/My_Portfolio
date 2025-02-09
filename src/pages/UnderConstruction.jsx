import Menu from '../components/Menu';
import '../assets/css/UnderConstruction.css';
import workingImage from '../assets/img/working.png';

function UnderConstruction() {
    return (
        <div>
            <Menu />
            <div className="construction-container">
                <img src={workingImage} alt="Página en construcción" className="construction-image" />
                <h2>Estamos trabajando en esta página.</h2>
                <p>Pronto estará disponible. ¡Gracias por tu paciencia!</p>
            </div>
        </div>
    );
}

export default UnderConstruction
