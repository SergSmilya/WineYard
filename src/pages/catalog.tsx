import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { setSearchText } from "../store/serchSlice";

import { Box, Stack } from "@mui/material";
import { info } from "../theme/palette";

import CatalogTitle from "../sections/catalog/catalogTitle";
import SidebarFilter from "../sections/catalog/sidebarFilter";
import SortSection from "../sections/catalog/sortSection";
import WineList from "../sections/catalog/wineList";
import SearchResults from "../sections/catalog/searchResults";

function Catalog() {
  const dispatch = useDispatch(); 
  const [clearAllFilters, setClearAllFilters] = useState(false); // Очистити всі фільтри
  const [filters, setFilters] = useState("");
  const [dishName, setDishName] = useState("");
  const [ordering, setOrdering] = useState("");
  const [wineCount, setWineCount] = useState(0);
  const [isFilterCleared, setIsFilterCleared] = useState(false); // Очистити фільтри по ціні, типу, кольору, країні та sort by якщо обрав інше сортування
  const isSearchResults = !!useSelector((state: RootState) => state.searchText.searchText) // Показати компоненту з результатами пошуку 

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
      dispatch(setSearchText("")); 
    }
  }, [clearAllFilters, dispatch]);

  useEffect(() => {
    // Щоб застосувати фільтри або sort by, після сортування по страві - потрібно його очистити
    if (filters !== "" || ordering !== "") {
      setDishName("");
      dispatch(setSearchText(""));
    }
  }, [filters, ordering, dispatch]);

  useEffect(() => {
    // Щоб застосувати сортування по стравах, після фільтрів або sort by - очищаємо їх
    if (dishName !== "") {
      setFilters("");
      setOrdering("");
      dispatch(setSearchText("")); 
    }
  }, [dishName, dispatch]);

  return (
    <Box
      sx={{
        backgroundColor: info.main,
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
          {isSearchResults ? (
            <SearchResults setWineCount={setWineCount} />
          ) : (
            <WineList
              filters={filters}
              dishName={dishName}
              ordering={ordering}
              setWineCount={setWineCount}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Catalog;
