import { useEffect, useState, useMemo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Box, Hidden, Stack } from "@mui/material";
import { info } from "../theme/palette";

import CatalogTitle from "../sections/catalog/catalogTitle";
import SidebarFilter from "../sections/catalog/sidebarFilter";
import SortSection from "../sections/catalog/sortSection";
import WineList from "../sections/catalog/wineList";
import SearchResults from "../sections/catalog/searchResults";

import { setSearchText } from "../store/serchSlice";
import { RootState } from "../store";
import FiltersModal from "../sections/catalog/filtersModal";


function Catalog() {
  const dispatch = useDispatch();
  const searchText = useSelector(
    (state: RootState) => state.searchText.searchText,
    shallowEqual
  ); // shallowEqual порівнює значення простих типів даних для покращення продуктивності

  const [clearAllFilters, setClearAllFilters] = useState(false); // Очистити всі фільтри
  const [filters, setFilters] = useState("");
  const [dishName, setDishName] = useState("");
  const [ordering, setOrdering] = useState("");
  const [wineCount, setWineCount] = useState(0);
  const [isFilterCleared, setIsFilterCleared] = useState(false); // Очистити фільтри по ціні, типу, кольору, країні та sort by якщо обрав інше сортування
  const [showModal, setShowModal] = useState(true);

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
      dispatch(setSearchText(""));
      setClearAllFilters(false);
    }
  }, [clearAllFilters, dispatch]);

  useEffect(() => {
    // Щоб застосувати фільтри або sort by, після сортування по страві чи пошуку - потрібно їх очистити
    if (filters || ordering) {
      setDishName("");
      dispatch(setSearchText(""));
    }
  }, [filters, ordering, dispatch]);

  useEffect(() => {
    // Щоб застосувати сортування по стравах, після фільтрів, sort by чи search - очищаємо їх
    if (dishName) {
      setFilters("");
      setOrdering("");
      dispatch(setSearchText(""));
    }
  }, [dishName, dispatch]);

  useEffect(() => {
    // Очищаємо фільтри, sort by та сортування по страві для search
    if (searchText) {
      setFilters("");
      setOrdering("");
      setDishName("");
    }
  }, [searchText]);

  // Завдяки memo та useCallback уникаємо непотрібних рендерів та покращуємо продуктивність компонента.
  const handleSetFilters = useCallback((filters: string) => {
    setFilters(filters);
    setClearAllFilters(false);
  }, []);

  const memoizedSearchResults = useMemo(
    () => <SearchResults setWineCount={setWineCount} />,
    [setWineCount]
  );

  const memoizedWineList = useMemo(
    () => (
      <WineList
        filters={filters}
        dishName={dishName}
        ordering={ordering}
        setWineCount={setWineCount}
      />
    ),
    [filters, dishName, ordering, setWineCount]
  );

  const MemoizedSidebarFilter = useMemo(
    () => (
      <SidebarFilter
        setFilters={handleSetFilters}
        setClearAllFilters={setClearAllFilters}
        wineCount={wineCount}
        isFilterCleared={isFilterCleared}
      />
    ),
    [handleSetFilters, setClearAllFilters, wineCount, isFilterCleared]
  );

  return (
    <Box
      sx={{
        backgroundColor: info.main,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {showModal ? (
        <Box
          sx={{
            padding: "20px",
            backgroundColor: info.main,
            width: "100vw",
            minHeight: "100vh",
            zIndex: 9999, // забезпечує, що модальне вікно буде найвищим
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiltersModal
            setFilters={handleSetFilters}
            isFilterCleared={isFilterCleared}
            setShowModal={setShowModal}
          />
        </Box>
      ) : (
        <Stack
          sx={{
            maxWidth: "1280px",
            display: "grid",
            gridTemplateColumns: { xs: "0px 1fr", lg: "280px 1fr" },
            gridTemplateRows: "185px 1fr",
            gridTemplateAreas: ` "header header" "sidebar content" `,
            padding: { xs: "15px 16px 50px", lg: "17px 0px 90px" },
          }}
        >
          <Stack sx={{ gridArea: "header" }}>
            <CatalogTitle />
          </Stack>
          <Hidden lgDown>
            <Stack sx={{ gridArea: "sidebar" }}>{MemoizedSidebarFilter}</Stack>
          </Hidden>
          <Stack
            sx={{
              gridArea: "content",
              display: "flex",
              gap: "66px",
              marginLeft: { lg: "45px" },
            }}
          >
            <SortSection
              setDishName={setDishName}
              setOrdering={setOrdering}
              clearAllFilters={clearAllFilters}
              isFilterCleared={isFilterCleared}
              setIsFilterCleared={setIsFilterCleared}
              onClick={() => setClearAllFilters(true)}
              wineCount={wineCount}
              setShowModal={setShowModal}
            />
            {searchText ? memoizedSearchResults : memoizedWineList}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

export default Catalog;
