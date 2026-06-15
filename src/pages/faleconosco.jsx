import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"

function FaleConosco() {
    return (
        <>
            <Header/>

<main>
    <h1>Contato</h1>

    <p>
        Tem alguma dúvida ou sugestão de conteúdo?
        <br />
        Entre em contato conosco.
    </p>

    <p>gwarming@gmail.com</p>

    <p>Brasil</p>

    <form>

        <label>Seu nome</label>
        <input type="text" required />

        <label>E-mail</label>
        <input type="email" required />

        <label>Assunto</label>
        <input type="text" required />

        <label>Mensagem</label>
        <textarea required></textarea>

    </form>
</main>

            <Footer/>
            <ADrawer/>
        </>
    )
}

export default FaleConosco