import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import noResults from "../../assets/icons/no-results.svg";

function OutOfWine() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        sx={{
          fontSize: { xs: "28px", lg: "32px" },
          lineHeight: { xs: "33px", lg: "48px" },
          fontWeight: 600,
          color: success.dark,
        }}
      >
        Oops! We seem to be out of that wine...
      </Typography>
      <Box sx={{ mt: { xs: "70px", lg: "178px" }, alignSelf: "center" }}>
        <img src={noResults} alt="Bottle" />
      </Box>
    </Box>
  );
}

export default OutOfWine;
