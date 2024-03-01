import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function PrivacyComp() {
  const theme = useTheme();
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
          sx={{ fontWeight: "500", color: theme.palette.success.dark }}
        >
          Privacy &#38; Policy
        </Typography>
      </Link>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500", color: theme.palette.success.dark }}
        >
          Terms &#38; Condition
        </Typography>
      </Link>
    </Box>
  );
}
