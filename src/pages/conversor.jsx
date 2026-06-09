import Header from "../components/header";
import Footer from "../components/footer";
import ADrawer from "../components/drawer";
import "../css/conversor.css";
import { FaTemperatureHigh, FaExchangeAlt, FaSnowflake } from "react-icons/fa";

function Conversor() {
  return (
    <>
      <Header />

      <main className="conversor-container">
        <div className="conversor-card">

          <div className="icone-area">
  🌡️ 🔄 ❄️
          </div>

          <h1>Conversor de Temperatura</h1>

          <p>
            Escolha a direção da conversão e informe o valor.
          </p>

          <label>Tipo de conversão</label>

          <select>
            <option>Celsius para Fahrenheit</option>
            <option>Fahrenheit para Celsius</option>
            <option>Celsius para Kelvin</option>
            <option>Kelvin para Celsius</option>
          </select>

          <label>Valor a ser convertido</label>

          <input
            type="number"
            placeholder="Ex: 50"
          />

          <button>
            Converter Agora
          </button>

          <div className="resultado">
            <h3>RESULTADO</h3>
            <span>32°F</span>
          </div>

        </div>
      </main>

      <Footer />
      <ADrawer />
    </>
  );
}

export default Conversor;