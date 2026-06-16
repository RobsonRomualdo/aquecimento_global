import Header from "../components/header"
import Footer from "../components/footer"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import BasicCard from "../components/basicCard";
import { Link } from "react-router-dom";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent
} from "@mui/material";

import planetaIMG from "../images/planeta.jpg";

function Home() {
  return (
    <>
      <Header />

      <Box
        sx={{
          backgroundColor: "#f5f7fa",
          minHeight: "100vh",
          padding: "50px",
        }}
      >
        {/* HERO */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            mt: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              O futuro do{" "}
              <Box component="span" sx={{ color: "#009966" }}>
                Planeta
              </Box>
              <br />
              está em nossas mãos.
            </Typography>

            <Typography
              sx={{
                mt: 4,
                fontSize: "1.4rem",
                maxWidth: "650px",
              }}
            >
              O aquecimento global não é apenas uma estatística, é a
              realidade que define nossa era. Entenda as causas, as
              consequências e como pequenas mudanças podem gerar um
              grande impacto.
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
              <Button
               component={Link}
               to="/blog"
               variant="contained"
               sx={{
                borderRadius: "30px",
                backgroundColor: "#009966",
                px: 4,
                py: 1.5,
                }}
              >
                Saiba mais
              </Button>

            </Stack>
          </Box>

          <Box
            component="img"
            src={planetaIMG}
            alt="Planeta Terra"
            sx={{
              width: "500px",
              borderRadius: "15px",
            }}
          />
          </Box>
<Box
    sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "35px",
    marginTop: "80px",
    flexWrap: "wrap",
  }}
>
<BasicCard
    icone={<HelpOutlineOutlinedIcon/>}
    titulo="O que é?"
    texto="O aquecimento global é o aumento da temperatura média da Terra causado pelo excesso de gases de efeito estufa."
    textoCompleto="Esse fenômeno provoca mudanças climáticas, eventos extremos e impactos significativos nos ecossistemas e na vida humana."
    backgroundColorIcon="#dbeafe"
    colorIcon="#2563eb"
    sx={{
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#f0f9ff",
       },
     
    }}
  />


  <BasicCard
    icone={<InfoOutlinedIcon />}
    titulo="Causas"
    texto="Descubra como a queima de combustíveis fósseis e o desmatamento aceleram o efeito estufa."
    textoCompleto="A utilização de carvão, petróleo e gás natural libera grandes quantidades de CO₂ na atmosfera. O desmatamento reduz a capacidade das florestas de absorver esse gás, intensificando o aquecimento global."
    backgroundColorIcon="#dbeafe"
    colorIcon="#2563eb"
    sx={{
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#f0f9ff",
       },
     
    }}
  />

  <BasicCard
    icone={<WarningAmberOutlinedIcon />}
    titulo="Consequências"
    texto="Mudanças climáticas que provocam eventos extremos, aumento do mar e perda de biodiversidade."
    textoCompleto="O aumento dos gases de efeito estufa eleva a temperatura global, acelerando o derretimento das calotas polares e o consequente aumento do nível do mar. Esse ciclo de aquecimento altera os ecossistemas, causando a perda de biodiversidade e impulsionando eventos climáticos extremos, como secas, tempestades e ondas de calor."
    backgroundColorIcon="#fee2e2"
    colorIcon="#ef4444"
     sx={{
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#f0f9ff",
       },
     
    }}
  />

  <BasicCard
    icone={<CheckOutlinedIcon />}
    titulo="Soluções"
    texto="Energias renováveis, economia circular e reflorestamento.
    Formam a base da transformação ecológica."
    textoCompleto="Com a crescente urgência climática, a combinação de energias renováveis, economia circular e reflorestamento é fundamental para transitar rumo a um modelo de desenvolvimento sustentável. Esses três pilares atuam em sinergia para mitigar os impactos ambientais e regenerar o planeta:
     Energias Renováveis 
     Economia Circular 
     Reflorestamento e Regeneração"
    backgroundColorIcon="#dcfce7"
    colorIcon="#22c55e"
     sx={{
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#f0f9ff",
       },
     
    }}
  />
</Box>

</Box> 

      <Footer />
    </>
  );
}

export default Home;
