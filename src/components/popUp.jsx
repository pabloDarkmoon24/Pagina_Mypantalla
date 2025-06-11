import { useEffect, useState } from "react";
import '../styles/popUp.css';
import popup from '../../public/popup.jpeg'

export const Popup = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Mostrar con retraso para activar animación de entrada
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300); // Duración igual a la animación de salida
  };

  if (!visible) return null;

  return (
    <div className={`popup-overlay ${closing ? 'fade-out' : 'fade-in'}`}>
      <div className="popup-image-box">
        <button className="popup-close" onClick={handleClose}>×</button>
        <a href="#tu-enlace" target="_blank" rel="noopener noreferrer">
          <img src={popup} alt="Promoción" />
        </a>
      </div>
    </div>
  );
};