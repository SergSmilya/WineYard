import { Box, Typography, Link } from "@mui/material";
import { success } from "../../theme/palette";

export default function PrivacyComp() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: "60px",
      }}
    >
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500", color: success.dark }}
        >
          Privacy &#38; Policy
        </Typography>
      </Link>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500", color: success.dark }}
        >
          Terms &#38; Condition
        </Typography>
      </Link>
    </Box>
  );
}
