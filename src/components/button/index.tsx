import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  color: "primary" | "secondary";
  text: string;
  width?: string;
  height: string;
  borderRadius?: string;
  fontsize?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function CustomButton({
  color,
  text,
  width,
  height,
  fontsize = "24px",
  borderRadius = "5px",
  onClick,
  type = "button",
}: CustomButtonProps) {
  return (
    <Button
      sx={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        padding: "15px 30px",
      }}
      color={color}
      variant="contained"
      role={type}
      onClick={onClick}
    >
      <Typography variant="button" sx={{ fontSize: fontsize }}>
        {text}
      </Typography>
    </Button>
  );
}

export default CustomButton;
