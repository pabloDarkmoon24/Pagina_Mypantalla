
import '../styles/sectionNine.css'
import instagram from '../../public/nstagram.png'
import youtube from '../../public/youtube.png'
import linktree from '../../public/link-tree.png'
import tiktok from '../../public/tik-tok.png'
import whatsapp from '../../public/whatsapp.png'


export const SectionNine = () =>{
    return (
        <section className="social-section">
            <div className="container text-center">
                <h2 className="social-title">Síguenos en:</h2>
                <div className="social-icons">
                <a href="https://www.instagram.com/mypantallaoficial/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb4OKZxLCoWvL7SiZV1q" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@Mypantalla_oficial/playlists" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="YouTube" className="social-icon" />
                </a>
                <a href="https://linktr.ee/mypantalla" target="_blank" rel="noopener noreferrer">
                    <img src={linktree} alt="YouTube" className="social-icon" />
                </a>
                <a href="https://www.tiktok.com/@mypantallaoficial" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="YouTube" className="social-icon" />
                </a>
                </div>
            </div>
        </section>
    )
}
