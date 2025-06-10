import '../styles/sectionSix.css'
import { RuletaConFirebase } from './ruletaConFirebase';
import logo from '../../public/logo.png'
import '../styles/sectionTwo.css'

export const SectionSix = () => {
  return (
    <section className="section-six">
      <div className="section-six-content">
        {/* Título y subtítulo */}
        <div className="row">
          <div className="col-12">
            <h2 className="ruleta-title">
              <div className="line text-white">GIRA LA RULETA</div>
              <div className="line text-cyan">Y PRUEBA TU SUERTE</div>
            </h2>
            <p className="ruleta-subtext">
              Recuerda que por cada recarga <span>tendrás 1 giro</span>
            </p>
          </div>
        </div>

        {/* Ruleta completa (ruleta + input) */}
        <div className="row">
          <div className="col-12">
            <RuletaConFirebase />

            <p className="contact-message">
              ¿Aún no estás activo? Encuentra un distribuidor
            </p>
            <a
              className="contact-button"
              href="https://drive.google.com/file/d/1Qd2ivBAoKW-rl6ki70FzqclCdHnExsdu/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTÁCTA UN DISTRIBUIDOR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};