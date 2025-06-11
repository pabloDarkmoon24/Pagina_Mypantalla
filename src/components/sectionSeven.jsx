import '../styles/sectionSeven.css';
import testimonio1 from '../../public/TESTIMONIOS-1.png'
import testimonio2 from '../../public/TESTIMONIO-2.png'
import testimonio3 from '../../public/TESTIMONIO-3.png'

export const SectionSeven = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="testimonials-title">LO QUE DICEN LOS <br /> QUE <span className="highlight"> YA EMPEZARON</span></h2>
          </div>
        </div>

        <div className="row testimonial-cards">
          <div className="col-4 testimonial-card">
            <img src={testimonio1} alt="Testimonio Laura G." />
          </div>
          <div className="col-4 testimonial-card">
            <img src={testimonio2} alt="Testimonio Diego R." />
          </div>
          <div className="col-4 testimonial-card">
            <img src={testimonio3} alt="Testimonio Camila P." />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h3 className="faq-title">PREGUNTAS FRECUENTES</h3>
            <p className="faq-subtitle">
              Aquí resolvemos las dudas más comunes sobre cómo <br /> empezar a generar ingresos con <strong>My Pantalla</strong>
            </p>
          </div>
        </div>

        <div className="row faq-items">
          <div className="col-12 faq-item">
            <h4>¿Qué productos puedo vender?</h4>
            <p>Ofrecemos acceso a plataformas de entretenimiento como Netflix, Disney+, Prime Video, Crunchyroll, Spotify y más.</p>
          </div>
          <div className="col-12 faq-item">
            <h4>¿Necesito invertir dinero para empezar?</h4>
            <p>No. Solo necesitas registrarte con un distribuidor y activar tus productos para empezar a vender.</p>
          </div>
          <div className="col-12 faq-item">
            <h4>¿Cuánto puedo ganar?</h4>
            <p>Depende de tu dedicación. Puedes generar ingresos desde tus primeras ventas y escalar como quieras.</p>
          </div>
          <div className="col-12 faq-item">
            <h4>¿Desde dónde puedo gestionar mi negocio?</h4>
            <p>100% desde tu celular o computador, usando nuestro Panel de Distribuidor.</p>
          </div>
        </div>

        <p className="faq-extra">
          <span className="red">¿Tienes alguna duda adicional?</span> Escríbenos directamente <br /> en nuestro canal de atención en Telegram!
        </p>
        <a href="https://t.me/Mypantalla_Bot" target="_blank" rel="noopener noreferrer" className="telegram-btn">IR A TELEGRAM</a>
      </div>
    </section>
  );
};
