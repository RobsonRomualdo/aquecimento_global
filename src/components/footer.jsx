import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        
            <Box component="footer" sx={{mt:"auto", width: '100%', height: '127px', backgroundColor: '#0F172A', display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", color:"#ffffff"}}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px"}}>
                    <Box component="img" src='/src/images/terra.png' alt="terra" sx={{width:"40px"}}/>
                    <Typography variant="h6" component="h6" sx={{ fontWeight: "700", fontSize: "16px"}}>
                        Global Warming
                    </Typography>
                </Box>
                <Typography variant="p" component="p" sx={{ fontWeight: "light", fontSize: "16px", marginBottom: "12px"}}>
                    Promovendo a conscientização ambiental através da informação.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", flexDirection: "column", alignItems: "center"}}>
                    <Typography variant="p" component="p" sx={{ fontWeight: "light", fontSize: "12px"}}>
                        © 2026 Global Warming. 
                    </Typography>
                    <Typography variant="p" component="p" sx={{ fontWeight: "light", fontSize: "12px"}}>
                        Todos os direitos reservados. Protótipo para Fins Educativos.
                    </Typography>
                </Box>
            </Box>

    )
}

export default Footer