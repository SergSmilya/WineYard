import { Box, Stack, Typography } from "@mui/material";

import { paths } from "../../../config/path";
import RouterLink from "../../../routes/routerLink";
import { secondary, success } from "../../../theme/palette";

function CatalogTitle() {
  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "27px",
        }}
      >
        <RouterLink
          to={paths.HOME}
          style={{ textDecoration: "none", color: success.dark }}
        >
          <Typography variant="h6">Main /</Typography>
        </RouterLink>
        <Typography variant="h6" sx={{ fontWeight: "600", marginLeft: "3px" }}>
          Catalog
        </Typography>
      </Stack>
      <Typography
        variant="h4"
        sx={{ lineHeight: "96px", color: secondary.light }}
      >
        Catalog
      </Typography>
    </Box>
  );
}

export default CatalogTitle;
