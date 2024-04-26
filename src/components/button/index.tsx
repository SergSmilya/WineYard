import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { common } from "@mui/material/colors";

interface CustomButtonProps {
  color: "primary" | "secondary";
  text: string;
  width?: string;
  height: string;
  borderRadius?: string;
  fontsize?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  customWhite?: boolean;
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
  customWhite = false,
}: CustomButtonProps) {
  return (
    <Button
      sx={{
        width: width,
        height: height,
        minWidth: "auto",
        borderRadius: borderRadius,
        padding: "15px 30px",
        backgroundColor: `${customWhite ? common.white : null}`,
        color: `${customWhite ? "#486284" : null}`,
        boxShadow: "none",
        "&:hover": {
          backgroundColor: `${customWhite ? "#f9f9f9" : null}`,
          boxShadow: "none",
        },
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
