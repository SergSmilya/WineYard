import { Box, Typography } from "@mui/material";

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
      <Typography variant="h5" sx={{ fontWeight: "500" }}>
        Privacy &#38; Policy
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "500" }}>
        Terms &#38; Condition
      </Typography>
    </Box>
  );
}
