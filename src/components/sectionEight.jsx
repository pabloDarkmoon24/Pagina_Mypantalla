import '../styles/sectionEight.css'
import celular from '../../public/mockup-publicidad.png'
import icon from '../../public/icon.png'

export const SectionEight = () => {
    return (
        <section className="bonus-section">
        <div className="container">
            <div className="row">
            <div className="col-12 text-center">
                <h2 className="bonus-title">
                <span className="highlight-magenta">BONUS EXCLUSIVO:</span><br />
                Publicidad <span className="highlight-cyan">GRATIS</span> para ti
                </h2>
            </div>
            </div>

            <div className="row">

            <div className="col-6 bonus-image">
                <img src={celular} alt="Celular Bonus MyPantalla" />
            </div>

            <div className="col-6 bonus-text">
                <p className="bonus-description">
                <strong>Al ser parte de nuestra red,</strong> <span className="cyan">te damos acceso a un canal exclusivo de Telegram</span> donde compartimos contenido que <span className="magenta">te ayudará a vender más cada día:</span>
                </p>

                <ul className="bonus-benefits">
                <li><span className="icon"><img src={icon} alt="+" /></span> Publicidad atractiva para captar nuevos clientes fácilmente</li>
                <li><span className="icon"><img src={icon} alt="+" /></span> Promociones actualizadas y ofertas especiales</li>
                <li><span className="icon"><img src={icon} alt="+" /></span> Noticias y anuncios importantes de My Pantalla</li>
                </ul>

                <a href="https://t.me/mypantallaoficial" target="_blank" rel="noopener noreferrer" className="bonus-button">IR A EL CANAL</a>            
            </div>
            </div>
        </div>
        </section>
    )
}