import {Typography, Box, Card, CardContent, CardMedia, CardActionArea, CardActions, Button} from '@mui/material';

function ArticleCard(props) {
    return (
        
        <Card sx={{ width: "686px", ...props.sx}}>
            <CardActionArea>
                <CardMedia sx={{backgroundColor: "red"}}
                    component="img"
                    height="180"
                    image={props.imagem}
                    alt="Article Image"
                />
                <CardContent>
                    <Typography component="p" sx={{display:"flex", alignItems:"center", gap:"10px", fontSize:"12px", fontWeight:"600", color:props.corMateria}}>
                        {props.materia} <Box sx={{fontSize:"10px", fontWeight:"300", color:"#929292"}}>{props.data}</Box>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"24px"}}>
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {props.descricao}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={props.link} size="small" sx={{textTransform:"none", color:"#059568", fontSize:"12px"}}>
                    Ler mais
                </Button>
            </CardActions>
        </Card>
        
    )
}

export default ArticleCard