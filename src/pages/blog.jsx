import Header from "../components/header"
import Footer from "../components/footer"
import ADrawer from "../components/drawer"
import ArticleCard from "../components/articleCard"

import poluicaoAr from "../images/poluicao-ar.png"

import {Typography, Box, Paper} from '@mui/material';

function Blog() {
    return (
        <>
            <Header/>
                <Box sx={{width:"100%", padding:"0 10%", display:"flex", justifyContent:"space-evenly", alignItems:"center", margin:"90px auto", gap:"40px"}}>
                    <Box sx={{textAlign:"left"}} >
                        <Typography variant="h3" sx={{fontSize:"32px", fontWeight:"bold"}}>
                            Blog de Notícias
                        </Typography>
                        <Typography variant="body1" sx={{marginTop:"50px", fontSize:"22px"}}>
                            Mantenha-se informado sobre as últimas descobertas e avanços na luta contra as mudanças climáticas.
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <iframe src="https://api.wo-cloud.com/content/widget/?geoObjectKey=13685856&language=pt&region=BR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius" name="CW2" scrolling="no" width="318px" height="318px" frameBorder="0" style={{border: "1px solid #10658E", borderRadius: "8px"}}></iframe>
                    </Box>
                    
                </Box>

                <Box sx={{margin:"0 auto"}}>
                    
                </Box>

                <Box sx={{display:"flex", width:"calc(100% - 48px)", justifyContent:"center", gap:"20px", margin:"76px auto"}}>
                    <ArticleCard
                        imagem="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2025/05/22124520/energia-solar-620x620.jpeg"
                        link="https://jornaldebrasilia.com.br/brasil-7/energia-solar-como-funciona-e-quais-os-beneficios-dessa-fonte-sustentavel/"
                        materia="ENERGIA"
                        corMateria="#059568"
                        data="20 de setembro de 2023"
                        titulo="Como funciona e quais os benefícios dessa fonte sustentável"
                        descricao="A energia solar tem se consolidado como uma das principais alternativas sustentáveis para a geração de eletricidade no mundo."
                    />
                    <ArticleCard
                        imagem="https://nautica.com.br/wp-content/uploads/2023/06/dia-oceano-1.bx_.jpg"
                        link="https://nautica.com.br/dia-do-oceano-voce-sabe-qual-e-o-oceano-mais-antigo-da-terra/"
                        materia="OCEANOS"
                        corMateria="#0077B6"
                        data="12 Abr, 2024"
                        titulo="Você sabe qual é o oceano mais antigo da Terra?"
                        descricao="Um levantamento da Administração Nacional Oceânica e Atmosférica dos EUA (NOAA) respondeu a essa pergunta."
                    />
                    <ArticleCard
                        imagem={poluicaoAr}
                        link="https://nautica.com.br/dia-do-oceano-voce-sabe-qual-e-o-oceano-mais-antigo-da-terra/"
                        materia="AR"
                        corMateria="#e6b990"
                        data="12 Abr, 2024"
                        titulo="Poluição do ar causa milhões de mortes precoces e afeta todo globo."
                        descricao="A poluição do ar continua a ser uma ameaça global persistente, com consequências severas para a saúde humana, o ambiente e as economias. "
                    />
                </Box>
                
            <Footer/>
            <ADrawer/>
        </>
    )
}

export default Blog