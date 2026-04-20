import * as React from 'react';
import TipCard from './tipCard';
import AButton from './aButton';
import {Box, Typography, Card, Drawer, Button} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CloseIcon from '@mui/icons-material/Close';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';


export default function ADrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 320}} role="presentation">
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 25px", width:"100%", height:"42px"}}>
          <Typography variant='h6' component="h1" sx={{fontSize: "18px", color:"#059568"}}>Dicas ecológicas</Typography>
          <Button onClick={toggleDrawer(false)} sx={{color:"#929292", padding:"0", minWidth:"16px"}}>
            <CloseIcon sx={{fontSize:"25px"}}/>
          </Button>
        </Box>
        <Box component="div" sx={{display:"flex", gap:"40px", margin:"20px 25px 50px 25px", flexDirection:"column"}}>
          <TipCard
          backgroundCard="#E5FFF7"
          icone={<ParkOutlinedIcon />}
          ColorIcon="#1CCF85"
          titulo="Reduza o plástico"
          colorTitulo="#047857"
          texto="Substitua sacolas plásticas por ecobags e evite canudos descartáveis."
          />
          <TipCard
          backgroundCard="#D8F8FF"
          icone={<WaterDropOutlinedIcon />}
          ColorIcon="#5F87C7"
          titulo="Economize Água"
          colorTitulo="#3A5683"
          texto="Feche a torneira ao escovar os dentes. Reduzir 1 minuto de banho economiza até 6 litros."
          />
          <TipCard
          backgroundCard="#F8FFCE"
          icone={<WbIncandescentOutlinedIcon />}
          ColorIcon="#EAC55F"
          titulo="Energia Limpa"
          colorTitulo="#CF9E67"
          texto="Apague as luzes ao sair de um cômodo e prefira lâmpadas de LED."
          />
          <TipCard
          backgroundCard="#F8F8F8"
          icone={<DirectionsBikeIcon />}
          ColorIcon="#928585"
          titulo="Transporte consciente"
          colorTitulo="#656565"
          texto="Sempre que puder, caminhe ou use a bicicleta. O planeta e sua saúde agradecem."
          />
          <TipCard
          backgroundCard="#FFEBFF"
          icone={<RecyclingOutlinedIcon />}
          ColorIcon="#370889"
          titulo="Separação de resíduos"
          colorTitulo="#7300FF"
          texto="Separe corretamente o papel, vidro, plástico e metal. A reciclagem começa em casa."
          />
        </Box>
        <Card sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"cemter", margin:"0 25px 50px 25px", width:"270px", minHeight:"150px", backgroundColor:"#059568", borderRadius:"16px"}}>
          <Typography sx={{textAlign:"center", color:"white", padding:"20px 8px 0 8px", marginBottom:"40px"}}>
            “Pequenas atitudes de muitos podem mudar o mundo.”
          </Typography>
          <AButton onClick={toggleDrawer(false)} sx={{marginBottom:"24px"}}
            texto="Entendido!"
            color="#059568"
            backgroundColor="#fff"
            width="225px"
            height="34px"
            borderRadius="12px"
            fontSize="16px"
          />
        </Card>
    </Box>
  );

  return (
    <Box component="div"  sx={{width:"50px", maxHeight:"100%", position:"fixed", bottom:"32px", left:"24px"}}>
      <Button onClick={toggleDrawer(true)} sx={{position:"sticky", bottom:"20px", minWidth:"50px", minHeight:"50px", borderRadius:"50%", backgroundColor:"#059669", padding:"0"}}>
        <EmojiObjectsIcon sx={{color:"white"}}/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
