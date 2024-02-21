import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

function GiftBoxSlide() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: "0px",
        height: "810px",
      }}
    >
      <div>Welcome</div>
    </Box>
  );
}

export default GiftBoxSlide;
