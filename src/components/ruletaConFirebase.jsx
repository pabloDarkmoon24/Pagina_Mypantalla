import { useState } from 'react';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { Wheel } from 'react-custom-roulette';
import { db } from '../fireBase';
import BonoVisual from './bonoVisual';
import '../styles/sectionSix.css'

const data = [
  { option: 'bono 1 usd' },
  { option: 'bono 10 usd' },
  { option: 'bono 50 usd' },
  { option: 'bono 100 usd' },
  { option: 'directv pantalla' },
  { option: 'vix pantalla' },
  { option: 'prime pantalla' },
  { option: 'canva pro' },
  { option: 'max pantalla' },
  { option: 'crunchyroll' },
  { option: 'youtube' },
  { option: 'sigue intentando' } 
];

export const RuletaConFirebase = () => {
  const [codigo, setCodigo] = useState('');
  const [premioIndex, setPremioIndex] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [premioFinal, setPremioFinal] = useState(null);
  const [mostrarBono, setMostrarBono] = useState(false);

  const handleParticipar = async () => {
    if (!codigo) return alert('Debes ingresar un código.');

    setLoading(true);
    setMostrarBono(false); // Oculta el bono si se está participando con otro código

    const codigosRef = collection(db, 'codigos');
    const q = query(codigosRef, where('codigo_ingresado', '==', codigo));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert('❌ Código inválido.');
      setLoading(false);
      return;
    }

    const docData = querySnapshot.docs[0];
    const datos = docData.data();

    if (datos.usado) {
      alert('⚠️ Este código ya fue utilizado.');
      setLoading(false);
      return;
    }

    const premioRaw = datos.premio?.trim();
    const index = data.findIndex(p => p.option.trim().toLowerCase() === premioRaw.toLowerCase());

    if (index === -1) {
      alert(`⚠️ El premio "${premioRaw}" no está configurado en la ruleta.`);
      setLoading(false);
      return;
    }

    setPremioIndex(index);
    setMustSpin(true);

    setPremioFinal({
      premio: premioRaw,
      codigoRedencion: datos.codigo_redencion,
      docId: docData.id,
    });
  };

  const handleStop = async () => {
    if (!premioFinal) return;

    await updateDoc(doc(db, 'codigos', premioFinal.docId), { usado: true });

    setMustSpin(false);
    setLoading(false);
    setCodigo('');
    setMostrarBono(true); // ✅ Mostrar bono solo aquí
  };

return (
  <div className="ruleta-wrapper">
    <div className="ruleta-container">
      {/* CUADRO A LA IZQUIERDA */}
      <div className="ruleta-col left">
        <div className="ruleta-wheel-box">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={premioIndex}
            data={data}
            backgroundColors={['#00d4ff', '#e6007e']}
            textColors={['#000']}
            radiusLineColor="#fff"
            outerBorderColor="#fff"
            outerBorderWidth={5}
            innerBorderColor="#e6007e"
            innerBorderWidth={10}
            fontSize={16}
            onStopSpinning={handleStop}
          />
        </div>
      </div>

      {/* CUADRO A LA DERECHA */}
      <div className="ruleta-col right">
        <div className="ruleta-input-box">
          <h1 className="ruleta-title">INGRESA TU <br /> CÓDIGO</h1>
          <input
            type="text"
            value={codigo}
            onChange={e => setCodigo(e.target.value.toUpperCase())}
            placeholder="Ej: ABC123"
            className="ruleta-input"
          />
          <button
            onClick={handleParticipar}
            disabled={mustSpin || loading}
            className="ruleta-button"
          >
            {loading ? 'Verificando...' : 'GIRAR RULETA'}
          </button>
        </div>
      </div>
    </div>

    {/* 🎁 BONO DEBAJO */}
    {mostrarBono && premioFinal && (
      <div className="ruleta-bono-box">
        <BonoVisual codigoRedencion={premioFinal.codigoRedencion} />
      </div>
    )}
  </div>
);
}