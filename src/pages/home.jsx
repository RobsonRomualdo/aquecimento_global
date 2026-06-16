import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"

function Home() {
    return (
        <>
            <Header/>
            < main className="home">
            <selection className="hero-text">
                <div className="hero-text">
                    <h1>
                       o futuro do <span>planeta</span>
                       <br />
                        está em nossas mãos.
                        </h1>

                        <p>
                            O aquecimento global não é apenas uma estátistica, é a 
                            realidade que define nossa era. Entenda as causas, as 
                            consequências e como pequenas mudanças podem gerar um
                            grande impacto.
                        </p>

                        <div className="buttons">
                            <button className="btn-primary">Saiba mais</button>
                            <button className="btn-secondary">Contribuir</button>
                        </div>
                     </div>

                     <div className="hero-image">
                        <img src={planeta} alt="Planeta Terra" />
                     </div>
                     </selection>

                     <selection className="cards">
                        <div className="card">
                            <h3>Causas</h3>
                            <p>
                                Descubra como a queima de combustíveis fósseis e o 
                                desmatamento aceleram o efeito estufa.
                            </p>
                            </div>

                            <div className="card">
                                <h3>Consequências</h3>
                                <p>
                                    Eventos climáticos extremos, aumento do nível do mar 
                                    e perda de biodiversidade.
                                </p>
                                </div> 
                                
                                <div className="card">
                                    <h3>Soluções</h3>
                                    <p>
                                        Energias renováveis, economia circular e reflorestamento
                                        são os caminhos necessários.
                                    </p>
                                    </div>
                                    
         </selection>
            </main>
            <Footer/>
            <ADrawer/>
        </>
    );
}

export default Home;