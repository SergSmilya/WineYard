import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

function InfluencersPicksSlide() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0px",
        height: "810px",
      }}
    >
      <div>Welcome</div>
    </Box>
  );
}

export default InfluencersPicksSlide;
