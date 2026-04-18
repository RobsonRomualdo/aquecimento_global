import {Box, Card, Typography } from '@mui/material';

function BasicCard(props) {
    
    return (
        <Card sx={{ width: "333px", height:"235px", backgroundColor: "#ffffff", ...props.sx}}>
            <Box sx={{ width:"45px", height:"45px", backgroundColor:props.backgroundColorIcon, borderRadius:"8px", margin:"25px 0 0 25px" }}>
                {props.icone}
            </Box>
            <Typography sx={{ fontWeight:"700", margin:"20px 0 8px 25px", fontSize:"18px"}}>
                {props.titulo}
            </Typography>
            <Typography sx={{ fontWeight:"300", margin:"0 25px"}} >
                {props.texto}
            </Typography>
        </Card>
    )

}

export default BasicCard