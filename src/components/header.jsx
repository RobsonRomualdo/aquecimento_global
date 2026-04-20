import {Link, NavLink} from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Stack, IconButton } from '@mui/material';
import '../css/index.css'

function Header() {
    return (
        <AppBar component="header" position="fixed" sx={{width:"100%", height: "106px", backgroundColor: '#ffffff', display:"flex", flexDirection:"row"}}>   
            <img src="/src/images/global-warming.png" alt="Global Warming" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/conversor">Conversor</Link></li>
                <li><Link to="/faleconosco">Fale conosco</Link></li>
            </ul>
        </AppBar>
    )
}

export default Header