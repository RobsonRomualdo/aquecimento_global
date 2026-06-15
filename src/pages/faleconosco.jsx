import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"
import "../css/faleconosco.css"
import AButton from "../components/aButton"
import { EnvelopeSimple, MapPin } from "phosphor-react"

function FaleConosco() {
    return (
        <>
            <Header/>

            <main className="contato-container">
                <section className="contato-box">
                    <div className="contato-info">
                        <h1>Contato</h1>

                        <p>
                            Tem alguma dúvida ou sugestão de conteúdo?
                            <br />
                            Entre em contato conosco.
                        </p>

                        <div className="contato-detalhes">
                            <p>
                                <div className="icone-contato">
                                    <EnvelopeSimple size={19.5} weight="regular" />
                                </div>
                                gwarming@gmail.com
                            </p>

                            <p>
                                <div className="icone-contato">
                                    <MapPin size={21} weight="regular" />
                                </div>
                                Brasil
                            </p>
                        </div>
                    </div>

                    <form className="contato-form">
                        <div className="input-duplo">
                            <div className="campo">
                                <label>Seu nome</label>
                                <input type="text" required />
                            </div>

                            <div className="campo">
                                <label>E-mail</label>
                                <input type="email" required />
                            </div>
                        </div>

                        <div className="campo">
                            <label>Assunto</label>
                            <input type="text" required />
                        </div>

                        <div className="campo">
                            <label>Mensagem</label>
                            <textarea required></textarea>
                        </div>

                        <AButton
                            type="submit"
                            texto="Enviar Mensagem"
                            width="261px"
                            height="48px"
                            borderRadius="12px"
                            fontSize="14px"
                            fontWeight="600"
                        />
                    </form>
                </section>
            </main>

            <Footer/>
            <ADrawer/>
        </>
    )
}

export default FaleConosco