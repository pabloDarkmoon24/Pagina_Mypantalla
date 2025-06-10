import '../styles/hero.css'
import celular from '../../public/celular.png'


export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="row">
          <div className="col-12">
            <h1 className="hero-heading">¡NOS ALEGRA TENERTE AQUÍ!</h1>
            <p className="hero-subheading">Hoy empiezas a transformar tu tiempo en ingresos.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="hero-box">
              <div className="hero-text">
                <h2 className="hero-title">¡BIENVENIDO! A <span><br />MY PANTALLA</span></h2>
                <div className="hero-banner">Acabas de tomar una excelente decisión</div>
                <p className="hero-description">
                  Trabaja desde cualquier lugar y sé parte del <span>negocio digital del entretenimiento</span> que no para de crecer.
                </p>
              </div>

              <div className="hero-image">
                <img src={celular} alt="Celular MyPantalla" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="hero-footer-text">Haz clic aquí para activar tus productos y empezar a vender</p>
            <a
              href="https://mypantalla.goplay.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              IR AL PANEL DE DISTRIBUIDOR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};