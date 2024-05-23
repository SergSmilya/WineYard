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
          marginBottom: {xs:"0", lg: "27px"},
        }}
      >
        <RouterLink
          to={paths.HOME}
          style={{ textDecoration: "none", color: success.dark }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "12px", lg: "16px" } }}
          >
            Main /
          </Typography>
        </RouterLink>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            marginLeft: "3px",
            fontSize: { xs: "12px", lg: "16px" },
          }}
        >
          Catalog
        </Typography>
      </Stack>
      <Typography
        variant="h4"
        sx={{
          lineHeight: { xs: "69px", lg: "96px" },
          color: secondary.light,
          fontSize: { xs: "46px", lg: "64px" },
        }}
      >
        Catalog
      </Typography>
    </Box>
  );
}

export default CatalogTitle;
