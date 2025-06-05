import '../styles/sectionFour.css'

export const SectionFour = () => {
   const tutoriales = [
    {
      id: "NHEE29GsgmI?si=60B1Up4djQ3ON5EG",
      titulo: "¿Cómo crear un usuario en My pantalla, usando un código de referido?",

    },
    {
      id: "J_5erAVRgfI?si=n1omfVlZvza1eFgR",
      titulo: "¿Cómo comprar productos de entretenimiento en My Pantalla?",
    },
    {
      id: "KRFlEGlC7XQ?si=oM4mRZrerYN47KDe",
      titulo: "Tipos de productos en My Pantalla",

    },
    {
      id: "965IO58mnCk?si=4FSbxb6nUFFXzkVK",
      titulo: "Diferencias entre pantallas y cuentas",
    },
    {
      id: "fKSjLWry4ao?si=rH56_PPIuuBTpuRP",
      titulo: "¿Cómo convertir tus comisiones a dinero real? en My Pantalla",

    },
    {
      id: "Is3OYJKDvT0?si=mZhIylaXLd-bmn5D",
      titulo: "¿Cómo obtener mi link de referido en My Pantalla?",

    },
    {
      id: "TYZpDzQUFHE?si=aftSaeVQPXdnMiO_",
      titulo: "¿Cómo reportar una consignación manual en My Pantalla para la carga de saldo en la plataforma?",

    },
    {
      id: "yR29cC1JddI?si=tsl4cES1qvaqQwfh",
      titulo: "¿Cómo reportar fallos en My Pantalla?",

    },
  ];

  return (
    <section className="tutorials-section">
      <h2 className="tutorials-title">Domina la plataforma con nuestros tutoriales</h2>
      <p className="tutorials-subtitle">
        Aprende paso a paso todo lo que necesitas para empezar a generar ingresos.
      </p>

      <div className="tutorials-grid">
        {tutoriales.map((item, index) => (
          <div className="tutorial-card" key={index}>
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${item.id}`}
                title={item.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="tutorial-heading">{item.titulo}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
