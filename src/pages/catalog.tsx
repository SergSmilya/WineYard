import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CatalogTitle from "../sections/catalog/catalogTitle";
import SidebarFilter from "../sections/catalog/sidebarFilter";
import SortSection from "../sections/catalog/sortSection";
import WineList from "../sections/catalog/wineList";

function Catalog() {
  const theme = useTheme();
  const [clearAllFilters, setClearAllFilters] = useState(false); // Очистити всі фільтри
  const [filters, setFilters] = useState("");
  const [dishName, setDishName] = useState("");
  const [ordering, setOrdering] = useState("");
  const [wineCount, setWineCount] = useState(0);
  const [isFilterCleared, setIsFilterCleared] = useState(false); // Очистити фільтри по ціні, типу, кольору, країні та sort by якщо обрав інше сортування

  useEffect(() => {
    // Стерти фільтри та sort by, щоб було "", коли переходиш на сортування по страві
    setIsFilterCleared(false);
  }, [isFilterCleared]);

  useEffect(() => {
    // Очистити всі фільтри та сортування 
    if (clearAllFilters) {
      setDishName("");
      setFilters("");
      setOrdering("");
      setClearAllFilters(false);
    }
  }, [clearAllFilters]);

  useEffect(() => {
    // Щоб застосувати фільтри або sort by, після сортування по страві - потрібно його очистити
    if (filters !== "" || ordering !== "") {
      setDishName("");
    }
  }, [filters, ordering]);

  useEffect(() => {
    // Щоб застосувати сортування по стравах, після фільтрів або sort by - очищаємо їх
    if (dishName !== "") {
      setFilters("");
      setOrdering("");
    }
  }, [dishName]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.info.main,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          maxWidth: "1280px",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gridTemplateRows: "185px 1fr",
          gridTemplateAreas: ` "header header" "sidebar content" `,
          padding: "17px 0px 90px",
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
          <SidebarFilter
            setFilters={setFilters}
            setClearAllFilters={setClearAllFilters}
            wineCount={wineCount}
            isFilterCleared={isFilterCleared}
          />
        </Stack>
        <Stack
          sx={{
            gridArea: "content",
            display: "flex",
            gap: "66px",
            marginLeft: "45px",
          }}
        >
          <SortSection
            setDishName={setDishName}
            setOrdering={setOrdering}
            clearAllFilters={clearAllFilters}
            isFilterCleared={isFilterCleared}
            setIsFilterCleared={setIsFilterCleared}
          />
          <WineList
            filters={filters}
            dishName={dishName}
            ordering={ordering}
            setWineCount={setWineCount}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Catalog;
