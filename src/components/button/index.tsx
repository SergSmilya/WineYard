import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CustomButtonProps {
  color: "primary" | "secondary";
  text: string;
  width: string;
  type: string;
  onClick: () => void;
}

function CustomButton({ color, text, width, onClick, type='button' }: CustomButtonProps) {
  return (
    <div>
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
        type={type}
      >
        <Typography variant="button">{text}</Typography>
      </Button>
    </div>
  );
}

export default CustomButton;
