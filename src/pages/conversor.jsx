import { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import ADrawer from "../components/drawer";
import AButton from "../components/aButton";

import {
  Box,
  Card,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

function Conversor() {
  const [tipoConversao, setTipoConversao] = useState("cf");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");
  const [erro, setErro] = useState(false);

  function converterTemperatura() {
    if (valor.trim() === "") {
      setErro(true);
      setResultado("Digite um valor");
      return;
    }

    if (isNaN(valor)) {
      setErro(true);
      setResultado("Valor inválido");
      return;
    }

    setErro(false);

    const numero = Number(valor);

    let resultadoFinal;

    switch (tipoConversao) {
      case "cf":
        resultadoFinal = (numero * 9) / 5 + 32;
        setResultado(`${resultadoFinal.toFixed(2)} °F`);
        break;

      case "fc":
        resultadoFinal = ((numero - 32) * 5) / 9;
        setResultado(`${resultadoFinal.toFixed(2)} °C`);
        break;

      case "ck":
        resultadoFinal = numero + 273.15;
        setResultado(`${resultadoFinal.toFixed(2)} K`);
        break;

      case "kc":
        resultadoFinal = numero - 273.15;
        setResultado(`${resultadoFinal.toFixed(2)} °C`);
        break;

      default:
        setResultado("Erro");
    }
  }

  return (
    <>
      <Header />

      <Box
        component="main"
        sx={{
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ECECEC",
          padding: "50px 20px",
        }}
      >
        <Card
          sx={{
            width: "650px",
            padding: "40px",
            borderRadius: "24px",
            backgroundColor: "#F7F7F7",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "25px",
            }}
          >
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              🌡️
            </Box>

            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              🔄
            </Box>

            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#EEEEEE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              ❄️
            </Box>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: "700",
              color: "#1E293B",
              marginBottom: "12px",
            }}
          >
            Conversor de Temperatura
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "20px",
              color: "#666",
              marginBottom: "45px",
            }}
          >
            Escolha a direção da conversão e informe o valor.
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            Tipo de conversão
          </Typography>

          <FormControl
            fullWidth
            sx={{
              marginBottom: "35px",
            }}
          >
            <Select
              value={tipoConversao}
              onChange={(e) => setTipoConversao(e.target.value)}
            >
              <MenuItem value="cf">
                Celsius para Fahrenheit (°C → °F)
              </MenuItem>

              <MenuItem value="fc">
                Fahrenheit para Celsius (°F → °C)
              </MenuItem>

              <MenuItem value="ck">
                Celsius para Kelvin (°C → K)
              </MenuItem>

              <MenuItem value="kc">
                Kelvin para Celsius (K → °C)
              </MenuItem>
            </Select>
          </FormControl>

          <Typography
            sx={{
              fontSize: "20px",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            Valor a ser convertido
          </Typography>

          <TextField
            fullWidth
            placeholder="Ex: 50"
            value={valor}
            onChange={(e) => {
              setValor(e.target.value);

              if (erro) {
                setErro(false);
              }
            }}
            error={erro}
            helperText={erro ? "Digite apenas números válidos." : ""}
            sx={{
              marginBottom: "35px",
            }}
          />

          <Box
            sx={{
              marginBottom: "35px",
            }}
          >
            <AButton
              texto="Converter Agora"
              width="100%"
              height="55px"
              borderRadius="12px"
              onClick={converterTemperatura}
            />
          </Box>

          <Card
            sx={{
              backgroundColor: "#EFEFEF",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#707090",
                letterSpacing: "2px",
                marginBottom: "15px",
              }}
            >
              RESULTADO
            </Typography>

            <Typography
              sx={{
                fontSize: "52px",
                fontWeight: "700",
                color: "#059568",
              }}
            >
              {resultado || "--"}
            </Typography>
          </Card>
        </Card>
      </Box>

      <Footer />
      <ADrawer />
    </>
  );
}

export default Conversor;