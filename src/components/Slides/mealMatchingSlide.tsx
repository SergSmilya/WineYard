import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

function MealMatchingSlide() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: "0px",
      }}
    >
      <div>Welcome</div>
    </Box>
  );
}

export default MealMatchingSlide;
