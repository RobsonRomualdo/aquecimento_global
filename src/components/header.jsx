import { Box, AppBar, Stack} from '@mui/material';
import NavButton from './navButton';

function Header() {
    return (
        <AppBar component="header" position="sticky" sx={{width:"100%", height: "100px", backgroundColor: '#ffffff', display:"flex", flexDirection:"row"}}>   
        
            <Box component="img" src="/src/images/global-warming.png" alt="Global Warming" sx={{width: "90px", height: "90px", margin:"5px 0 5px 24px"}}/>
            
            <Stack direction="row" spacing={10} sx={{justifyContent: "center", alignItems: "center", width: "100%"}}>
                
                <NavButton to="/" label="Home"/>
                <NavButton to="/blog" label="Blog"/>
                <NavButton to="/conversor" label="Conversor"/>
                <NavButton to="/faleconosco" label="Fale conosco"/>

            </Stack>

        </AppBar>
    )
}

export default Header