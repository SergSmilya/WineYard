import { Box, Typography } from "@mui/material";
import { success } from "../../theme/palette";
import noResults from "../../assets/icons/no-results.svg";

function OutOfWine() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        sx={{
          fontSize: "32px",
          lineHeight: "48px",
          fontWeight: 600,
          color: success.dark,
        }}
      >
        Oops! We seem to be out of that wine...
      </Typography>
      <Box sx={{ mt: "178px", alignSelf: "center" }}>
        <img src={noResults} alt="Bottle" />
      </Box>
    </Box>
  );
}

export default OutOfWine;
