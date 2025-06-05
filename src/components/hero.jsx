import '../styles/hero.css'
import { RuletaConFirebase } from './ruletaConFirebase';
import logo from '../../public/logo.png'

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="row">
        <div className="hero-welcome">
                <span className="highlight-banner">¡NOS ALEGRA TENERTE AQUÍ!</span>
                <p>Hoy empiezas a transformar tu tiempo en ingresos.</p>
        </div>
        <div className="col col-8">
            <div className="hero-text-container">
              {/* <div className='mypantalla'>
                  <img src={logo} alt="logo-mypantalla" />
              </div> */}
                <h1 className="hero-title">
                ¡BIENVENIDO A <span className="highlight-name">MY PANTALLA GOPLAY</span>
                </h1>

                <span className="sub-banner">Acabas de tomar una excelente decisión</span>

                <p className="hero-description">
                Trabaja desde cualquier lugar y sé parte del negocio digital del entretenimiento que no para de crecer.
                </p>

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

        <div className="col col-4 ruleta-right">
            <div className="hero-ruleta">
                <RuletaConFirebase />
            </div>
        </div>
      </div>
    </section>
    
    
    
  );
};