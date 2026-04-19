import {Box, Card, Typography } from '@mui/material';

function TipCard(props){
    return(
        <Card sx={{ width: "272px", minHeight:"100px", borderRadius:"8px", backgroundColor:props.backgroundCard, ...props.sx}}>
            <Box component="div" sx={{display:"flex", height:"28px", padding:"2px 5px", gap:"10px"}}>
                <Box sx={{ width:"18px", height:"18px", color:props.ColorIcon}}>
                    {props.icone}
                </Box>
                <Typography sx={{ fontWeight:"400", margin:"0", fontSize:"18px", color:props.colorTitulo}}>
                    {props.titulo}
                </Typography>
            </Box>
            <Typography sx={{ fontWeight:"300", padding:"8px 8px 12px 8px", fontSize:"16px", lineHeight:"1.3"}} >
                {props.texto}
            </Typography>
        </Card>
    )
}

export default TipCard;