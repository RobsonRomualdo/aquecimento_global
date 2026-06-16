import { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Collapse
} from "@mui/material";

function BasicCard(props) {
  const [expandido, setExpandido] = useState(false);

  return (
    <Card
      sx={{
        width: "333px",
        minHeight: "235px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        transition: "0.3s",
        ...props.sx,
      }}
    >
      <Box
        sx={{
          width: "45px",
          height: "45px",
          backgroundColor: props.backgroundColorIcon,
          color: props.colorIcon,
          borderRadius: "8px",
          margin: "25px 0 0 25px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.icone}
      </Box>

      <Typography
        sx={{
          fontWeight: "700",
          margin: "20px 0 8px 25px",
          fontSize: "18px",
        }}
      >
        {props.titulo}
      </Typography>

      <Typography
        sx={{
          fontWeight: "300",
          margin: "0 25px 20px 25px",
        }}
      >
        {props.texto}
      </Typography>

      <Box sx={{ px: 3, pb: 2 }}>
        <Button
          size="small"
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? "Ver menos" : "Ler mais"}
        </Button>

        <Collapse in={expandido}>
          <Typography sx={{ mt: 2 }}>
            {props.textoCompleto}
          </Typography>
        </Collapse>
      </Box>
    </Card>
  );
}

export default BasicCard;