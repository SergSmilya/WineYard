import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CatalogTitle from "../sections/catalog/catalogTitle";
import SidebarFilter from "../sections/catalog/sidebarFilter";
import SortSection from "../sections/catalog/sortSection";
import WineList from "../sections/catalog/wineList";

function Catalog() {
  const theme = useTheme();
  const [clearFilters, setClearFilters] = useState(false);
  const [filters, setFilters] = useState("");
  const [dishName, setDishName] = useState("");
  const [ordering, setOrdering] = useState("");
  const [isNewest, setIsNewest] = useState(false);
  const [wineCount, setWineCount] = useState(0);
  
  useEffect(() => {
    // Якщо фільтри змінилися, очистити сортування
    if (clearFilters) {
      if (filters || dishName || ordering || isNewest) {
        setDishName("");
        setFilters("");
        setOrdering("");
        setIsNewest(false);
      }
      // Позначаємо, що очищення фільтрів відбулося
      setClearFilters(false);
    }
  }, [clearFilters]);

  useEffect(() => {
    // Якщо фільтри змінилися, очистити сортування
    if (filters !== "") {
      setDishName("");
      //setOrdering("");
      setIsNewest(false);
    }
  }, [filters]);

  useEffect(() => {
    if (ordering !== "") {
      setIsNewest(false);
      setDishName("");
      //setFilters("");
    }
  }, [ordering]);

  useEffect(() => {
    if (isNewest !== false) {
      setOrdering("");
      setDishName("");
      setFilters("");
    }
  }, [isNewest]);

  useEffect(() => {
    // Якщо сортування змінилося, очистити фільтри
    if (dishName !== "") {
      setFilters("");
      setOrdering("");
      setIsNewest(false);
    }
  }, [dishName]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.info.main,
        display: "flex",
        justifyContent: "center"
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
          <SidebarFilter setFilters={setFilters} setClearFilters={setClearFilters} wineCount={wineCount} />
        </Stack>
        <Stack
          sx={{
            gridArea: "content",
            display: "flex",
            gap: "66px",
            marginLeft: "45px",
          }}
        >
          <SortSection setDishName={setDishName} setOrdering={setOrdering} setIsNewest={setIsNewest} clearFilters={clearFilters} />
          <WineList filters={filters} dishName={dishName} ordering={ordering} isNewest={isNewest} setWineCount={setWineCount} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Catalog;
