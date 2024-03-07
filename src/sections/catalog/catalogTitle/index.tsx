import { Box, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { paths } from "../../../config/path";

function CatalogTitle() {
  const theme = useTheme();

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "27px",
        }}
      >
        <Link
          href={paths.HOME}
          sx={{ textDecoration: "none", color: theme.palette.success.dark }}
        >
          <Typography variant="h6">Main /</Typography>
        </Link>
        <Typography variant="h6" sx={{ fontWeight: "600", marginLeft: "3px" }}>
          Catalog
        </Typography>
      </Stack>
      <Typography
        variant="h4"
        sx={{ lineHeight: "96px", color: theme.palette.secondary.light }}
      >
        Catalog
      </Typography>
    </Box>
  );
}

export default CatalogTitle;
