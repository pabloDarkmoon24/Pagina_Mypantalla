import { useState , useEffect } from 'react';
import uno from '/public/estrella/Rango-aprendiz.png'
import dos from '../../public/estrella/Rango-veterano.png'
import tres from '../../public/estrella/Rango-elite.png'
import cuatro from '../../public/estrella/Rango-maestro.png'
import cinco from '../../public/estrella/Rango-gran-maestro.png'
import seis from '../../public/estrella/Rango-estrella.png'
import '../styles/carrusel1.css'

import uno1 from '../../public/estrella/Rango-aprendiz-premio-1.jpg'
import dos2 from '../../public/estrella/Rango-veterano-premio__-1.jpg'
import tres3 from '../../public/estrella/Premio-rango-elite.png'
import cuatro4 from '../../public/estrella/Premio-rango-maestro.png'
import cinco5 from '../../public/estrella/Premio-rango-gran-maestro.png'
import seis6 from '../../public/estrella/Premio-rango-estrella.png'

import com1 from '../../public/comando/2-scaled.jpg'
import com2 from '../../public/comando/3-scaled.jpg'
import com3 from '../../public/comando/4-scaled.jpg'

export const carruselDos = [
  uno1,dos2,tres3,cuatro4,cinco5,seis6
];


export const carruselUno = [
  uno,dos,tres,cuatro,cinco,seis
];

export const carruselTres = [
  com1,com2,com3
];

export const CarruselManual = ({ imagenes, ancho = 300, alto = 300 }) => {
  const [actual, setActual] = useState(0);

  const siguiente = () => {
    setActual((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente();
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div
      className="carrusel-manual"
      style={{ width: `${ancho}px`, height: `${alto}px` }}
    >
      <button className="btn-carrusel izquierda" onClick={anterior}></button>
      <img
        src={imagenes[actual]}
        alt={`Imagen ${actual}`}
        className="img-carrusel"
        style={{ width: `${ancho}px`, height: `${alto}px`, objectFit: 'contain' }}
      />
      <button className="btn-carrusel derecha" onClick={siguiente}></button>
    </div>
  );
};