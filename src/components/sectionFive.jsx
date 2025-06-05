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
            <img src={`${import.meta.env.BASE_URL}icon-4.png`} alt="Sistema sin complicaciones" />
            </div>
        </div>

        <div className="domina-footer">
            Convierte tu celular en una máquina de ingresos<br />y hazlo desde cualquier lugar
        </div>
        </section>
    )
}