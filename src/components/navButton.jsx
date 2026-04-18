import {Link, NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';

function NavButton(props) {
    return(
            <Box component={Link} to={props.to} sx={{display:"flex", alignItems:"center", justifyContent:"center", textTransform:"none", width:"100px", height:"40px","&:hover": {fontWeight:"600", borderBottom:"1px solid #000000"}}}>
                {props.label}
            </Box>
    )
}

export default NavButton