import Button from '@mui/material/Button';


function AButton({texto, backgroundColor="#059568", color="#FFFFFF", width="160px", height="50px", borderRadius="80px", fontSize="18px", fontWeight="bold", sx, ...rest}) {
    return(
        <Button {...rest} sx={{backgroundColor: backgroundColor, color: color, width: width, height: height, borderRadius: borderRadius, fontSize: fontSize, fontWeight: fontWeight, textTransform: "none", ...sx}}>
            {texto}
        </Button>
    )
}

export default AButton;
