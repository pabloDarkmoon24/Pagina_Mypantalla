
import '../styles/sectionNine.css'
import facebook from '../../public/facebook.png'
import instagram from '../../public/nstagram.png'
import youtube from '../../public/youtube.png'


export const SectionNine = () =>{
    return (
        <section className="social-section">
            <div className="container text-center">
                <h2 className="social-title">Síguenos en:</h2>
                <div className="social-icons">
                <a href="https://www.instagram.com/mypantallaoficial/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://linktr.ee/mypantalla" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@Mypantalla_oficial" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="YouTube" className="social-icon" />
                </a>
                </div>
            </div>
        </section>
    )
}
