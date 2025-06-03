import { useState } from 'react';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { Wheel } from 'react-custom-roulette';
import { db } from '../fireBase';
import '../styles/hero.css'

const data = [
  { option: 'Netflix' },
  { option: 'Disney+' },      
  { option: 'Amazon' },
  { option: 'HBO Max' },
  { option: 'Sorpresa' },
  { option: '5% OFF' },
  { option: '10% OFF' },
  { option: 'Sigue intentando' },
];

export const RuletaConFirebase = () => {
  const [codigo, setCodigo] = useState('');
  const [premioIndex, setPremioIndex] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [premioFinal, setPremioFinal] = useState(null);

  const handleParticipar = async () => {
    if (!codigo) return alert('Debes ingresar un código.');

    setLoading(true);
    setPremioFinal(null); // Limpiar mensaje anterior

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
    const premio = premioRaw;
    const index = data.findIndex(p => p.option.trim().toLowerCase() === premio.toLowerCase());

    if (index === -1) {
      alert(`⚠️ El premio "${premioRaw}" no está configurado en la ruleta.`);
      setLoading(false);
      return;
    }

    setPremioIndex(index);
    setMustSpin(true);

    // Guardar temporalmente los datos para mostrarlos cuando la ruleta se detenga
    setPremioFinal({ premio, codigoRedencion: datos.codigo_redencion, docId: docData.id });
  };

  const handleStop = async () => {
    if (!premioFinal) return;

    alert(`🎉 ¡Ganaste: ${premioFinal.premio}!\nTu código de redención es: ${premioFinal.codigoRedencion}`);

    // Marcar como usado
    await updateDoc(doc(db, 'codigos', premioFinal.docId), { usado: true });

    setCodigo('');
    setLoading(false);
    setPremioFinal(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Ingresa tu código</h2>
      <input
        type="text"
        value={codigo}
        onChange={e => setCodigo(e.target.value.toUpperCase())}
        placeholder="Ej: ABC123"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
      />
      <br />
      <button
        onClick={handleParticipar}
        disabled={mustSpin || loading}
        style={{
          padding: '10px 20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          backgroundColor: '#00d4ff',
          border: 'none',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        {loading ? 'Verificando...' : 'Participar'}
      </button>

      <div className="wheel-wrapper">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={premioIndex}
          data={data}
          backgroundColors={['#fff', '#f72585']}
          textColors={['#000']}
          radiusLineWidth={1}
          onStopSpinning={() => {
            setMustSpin(false);
            handleStop();
          }}
        />
      </div>
    </div>
  );
};

