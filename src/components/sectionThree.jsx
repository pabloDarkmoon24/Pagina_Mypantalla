import '../styles/sectionThree.css'

export  const SectionThree = () => {
    return (
        <section className="business-model-section">
        <h2 className="business-title">
            <span className="highlight-magenta">¿CÓMO FUNCIONA </span> <span className="highlight-cyan">NUESTRO <br /> MODELO DE NEGOCIO</span><span className="highlight-magenta">?</span>
        </h2>
        <p className="business-description">
            Aquí te mostramos cómo puedes empezar a generar ingresos desde tu celular,
            <span className="highlight-inline"> sin jefes, sin horarios, sin inventarios</span>
        </p>

        <div className="video-container">
            <iframe
            src="https://www.youtube.com/embed/Wg0s0bmhpD0"
            title="Video modelo de negocio"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
        </section>
);
}


