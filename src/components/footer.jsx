import { Box, AppBar, Toolbar, Typography, Stack, IconButton } from '@mui/material';

function Footer() {
    return (
        
            <AppBar component="footer" position="fixed" sx={{width: '100%', height: '127px', top: 'auto', bottom: 0, backgroundColor: '#0F172A' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px"}}>
                    <img src='/src/images/terra.png' alt="terra" />
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
            </AppBar>
        
    )
}

export default Footer