import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  color: "primary" | "secondary";
  text: string;
  width: string;
  type: string;
  onClick: () => void;
}

function CustomButton({ color, text, width, onClick, type='button' }: CustomButtonProps) {
  return (
    <Box>
      <Button
        sx={{
          width: width, 
          height: '62px',
          borderRadius: '5px',
          padding: '15px 40px',
        }}
        color={color}
        variant="contained"
        onClick={onClick}
        role={type}
      >
        <Typography variant="button">{text}</Typography>
      </Button>
    </Box>
  );
}

export default CustomButton;
