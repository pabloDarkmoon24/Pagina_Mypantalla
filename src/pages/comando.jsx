import { useState } from 'react';
import '../styles/comando.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase3'; // o '../firebase2' si usas una segunda instancia para esta BD
import baner from '../../public/comando/1-1-scaled.jpg'
import { CarruselManual, carruselTres } from '../components/carrusel1';

export const Comando = () => {
  const [cedula, setCedula] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const consultar = async () => {
    setMensaje('');
    setResultado(null);
    const cedulaLimpia = cedula.trim();

    if (!cedulaLimpia) {
      setMensaje('Por favor ingresa una cédula válida.');
      return;
    }

    try {
      const ref = doc(db, 'comando', cedulaLimpia);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();
        setResultado({
          cedula: data.cedula,
          referidos: data.usuarios_activos,
          rango: data.rango,
          bonificacion: data.bonificacion_total
        });
      } else {
        setMensaje('❌ No encontramos resultados con esa cédula.');
      }
    } catch (error) {
      console.error(error);
      setMensaje('❌ Ocurrió un error al consultar.');
    }
  };

  return (
    <div className="comando-page">
      <div className="container">
        <img src={baner} alt="banner" className="banner-principal" />
      <h1>Consulta tu Rango en Proyecto Comando</h1>
      <input
        type="text"
        placeholder="Ingresa tu cédula"
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
      />
      <button onClick={consultar}>Consultar</button>

      {mensaje && <p>{mensaje}</p>}

      {resultado && (
        <div className="resultado">
          <h3>🎯 Resultado:</h3>
          <p><strong>Cédula:</strong> {resultado.cedula}</p>
          <p><strong>Referidos activos:</strong> {resultado.referidos}</p>
          <p><strong>Rango:</strong> {resultado.rango}</p>
          <p><strong>Bonificación:</strong> ${resultado.bonificacion.toLocaleString()}</p>
        </div>
      )}
      <CarruselManual imagenes={carruselTres} ancho={800} alto={450} />
      </div>
    </div>
  );
}; 
