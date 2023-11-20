import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_texts">
                <p className="insta">Siga-nos no instagram para obter descontos incríveis!</p>
                <p className="whats">Fale conosco pelo WhatsApp</p>
            </div>
            <div className="footer_social">
                <a href="https://wa.me/5585996585581" className="footer_button">
                    <img src="https://logopng.com.br/logos/whatsapp-33.png" alt="" className="social_icon" />
                </a>
                <a href="https://instagram.com/linesbiquinis?igshid=OGY3MTU3OGY1Mw==" className="footer_button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" alt="" className="social_icon" />
                </a>
            </div>

            <div className="footer_copy">
                &copy;Linesbiquinis 2023
            </div>
        </footer>
    )
}