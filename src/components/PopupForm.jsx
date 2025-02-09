import { useState, useEffect } from 'react';
import '../assets/css/PopupForm.css';

function PopupForm({ closePopup }) {
    const [message, setMessage] = useState('');
    const maxChars = 500;

    let [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "ligth");

    const handleChange = (e) => {
        if (e.target.value.length <= maxChars) {
            setMessage(e.target.value);
        }
    };

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
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>✖</button>
                <h2>📩 Envíame un mensaje</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" placeholder="Tu nombre" required />
                        </div>
                        <div className="form-group">
                            <label>Correo</label>
                            <input type="email" placeholder="Tu correo" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Asunto</label>
                        <input type="text" placeholder="Asunto" required />
                    </div>

                    <div className="form-group">
                        <label>Mensaje</label>
                        <textarea
                            placeholder="Escribe tu mensaje..."
                            value={message}
                            onChange={handleChange}
                            maxLength={maxChars}
                            required
                        ></textarea>
                        <p className="char-count">{message.length} / {maxChars} caracteres</p>
                    </div>

                    <div className="form-footer">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopupForm