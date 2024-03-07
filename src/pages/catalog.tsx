import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CatalogTitle from "../sections/catalog/catalogTitle";
import SidebarFilter from "../sections/catalog/sidebarFilter";
import SortSection from "../sections/catalog/sortSection";
import WineList from "../sections/catalog/wineList";

function Catalog() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.info.main,
        height: "100%",
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gridTemplateRows: "185px 1fr",
        gridTemplateAreas: ` "header header" "sidebar content" `,
        padding: "17px 80px 0",
      }}
    >
      <Stack
        sx={{
          gridArea: "header",
        }}
      >
        <CatalogTitle />
      </Stack>
      <Stack
        sx={{
          gridArea: "sidebar",
        }}
      >
        <SidebarFilter />
      </Stack>
      <Stack
        sx={{
          gridArea: "content",
          display: "flex",
          gap: "66px",
          marginLeft: "45px",
        }}
      >
        <SortSection />
        <WineList />
      </Stack>
    </Box>
  );
}

export default Catalog;
