import { useState } from 'react';
import '../styles/estrella.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase2'; 
import baner from '../../public/estrella/Banner-operacion-estrella_mypantalla-980x383.png'
import banermobile from '../../public/estrella/Banner_mobile.png'
import { carruselDos, CarruselManual, carruselUno } from '../components/carrusel1';
import img from '../../public/estrella/negro_alzando_manos.png'


export const Rangos = () => {
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
      const ref = doc(db, 'estrella', cedulaLimpia);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();
        setResultado({
          cedula: data.identification,
          rango: data.rango,
          ventas: data.ventas_validas
        });
      } else {
        setMensaje('❌ No se encontró ningún resultado con esa cédula.');
      }
    } catch (error) {
      console.error(error);
      setMensaje('❌ Ocurrió un error al consultar.');
    }
  };

  return (
    <div className="estrella-page">
      <div className="container">
        <img src={baner} alt="Banner desktop" className="img-desktop" />
        <img src={banermobile} alt="Banner mobile" className="img-mobile" />
      <h1>Consulta tu Rango en Alcanza La estrella</h1>
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
          <h3>🎖 Resultado:</h3>
          <p><strong>Cédula:</strong> {resultado.cedula}</p>
          <p><strong>Ventas válidas:</strong> {resultado.ventas}</p>
          <p><strong>Rango:</strong> {resultado.rango}</p>
        </div>
      )}
      <CarruselManual imagenes={carruselUno} ancho={800} alto={550} />
      <div className="rango-descripcion">
        <div className="rango-imagen">
          <img src={img} alt="Rangos explicados" />
        </div>
        <div className="rango-texto">
          <h2>
            <span className="cyan">En My Pantalla, queremos ayudarte</span><br />
            <span className="cyan">a lograr tus metas.</span>
          </h2>

          <p>
            Por eso hemos creado un <span className="magenta">sistema de rangos</span> para nuestros distribuidores.
            Según tu número de ventas mensuales (dirigidas a clientes finales), serás asignado a un rango donde podrás
            obtener <strong>premios increíbles</strong>.
          </p>

          <p>
            Al permanecer o avanzar de rango cada mes, podrás acceder a contenido premium y herramientas exclusivas
            diseñadas para llevar tu negocio a otro nivel.
          </p>

          <p className="resaltado">
            ¡Nosotros te damos el impulso, y tú decides hasta dónde llegar!
          </p>
        </div>
      </div>
      <CarruselManual imagenes={carruselDos} ancho={800} alto={550} />

      </div>
    </div>
  );
};
