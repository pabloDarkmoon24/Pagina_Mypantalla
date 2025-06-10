import '../styles/sectionFive.css'

export const SectionFive = () => {
    return (
    <section className="domina-section">
      <h2 className="domina-title">DOMINA TU NEGOCIO</h2>
      <h3 className="domina-subtitle">CONQUISTA EL MUNDO DIGITAL</h3>

      <div className="domina-cards">
        <div className="domina-card">
          <img src={`${import.meta.env.BASE_URL}icon-1.png`} alt="Gana comisiones" />
        </div>
        <div className="domina-card">
          <img src={`${import.meta.env.BASE_URL}icon-2.png`} alt="Sistema automático" />
        </div>
        <div className="domina-card">
          <img src={`${import.meta.env.BASE_URL}icon-3.png`} alt="Vende global" />
        </div>
        <div className="domina-card">
          <img src={`${import.meta.env.BASE_URL}icon-4.png`} alt="Alta demanda" />
        </div>
      </div>

      <div className="domina-footer">
        <span className="resaltado">Convierte <span className="azul">tu celular</span> en <span className="azul">una máquina de ingresos</span></span><br />
        y hazlo desde cualquier lugar.
      </div>

      <p className="domina-subfooter">
        <em>Únete a miles de personas que ya están transformando su tiempo en ingresos.</em>
      </p>
    </section>
  );
};