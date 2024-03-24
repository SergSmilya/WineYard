import { useState, useMemo, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FilterHeader from "./filterHeader";
import PriceRange from "./priceRange";
import WineCheckbox from "./wineCheckbox";
import { wineColor, wineCountry, wineType } from "../../../config/wineFilters";
import FilterSubmitButton from "./filterSubmitButton";

function SidebarFilter() {
  const theme = useTheme();
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});
  const [resetFilters, setResetFilters] = useState(false); 
  const [queryString, setQueryString] = useState("");

  const constructQueryString = (filters: { [key: string]: string[] }): string => {
    let queryString = Object.entries(filters)
      .filter(([_, value]) => value.length > 0)
      .map(([key, value]) => {
        const updatedKey = key.replace(/Wine/gi, "").trim();
        const updatedValues = value.map((val) =>
          val.replace(/Wine/gi, "").trim()
        );
        return `${updatedKey.toLowerCase()}=${updatedValues.join("&")}`;
      })
      .join("&");

    if (queryString.startsWith("&")) {
      queryString = queryString.slice(1);
    }
    return queryString;
  }

  const constructedQueryString = useMemo(() => constructQueryString(selectedFilters), [
    selectedFilters,
  ]);

  useEffect(() => {
    if (queryString) {
      console.log(queryString);
    }
  }, [queryString]);

  const handleFilterChange = (
    filterTitle: string,
    filterItem: string,
    isChecked: boolean
  ) => {
    setSelectedFilters((prevFilters) => {
      if (isChecked) {
        return {
          ...prevFilters,
          [filterTitle]: [...(prevFilters[filterTitle] || []), filterItem],
        };
      } else {
        const updatedFilters = { ...prevFilters };
        updatedFilters[filterTitle] = updatedFilters[filterTitle].filter(
          (item) => item !== filterItem
        );
        return updatedFilters;
      }
    });
  };

  const handleFilterSubmit = () => {
    setQueryString(constructedQueryString);
    setResetFilters(true); // Встановлення значення для очищення фільтрів
  };

  useEffect(() => {
    if (resetFilters) {
      setSelectedFilters({}); // Очищення фільтрів після подання
      setResetFilters(false); // Скидання значення для очищення фільтрів
    }
  }, [resetFilters]);

  return (
    <Box
      sx={{
        color: theme.palette.success.dark,
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <FilterHeader onClick={() => setResetFilters(true)} />
      <PriceRange />
      <WineCheckbox
        title="Wine color"
        items={wineColor}
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters}
      />
      <WineCheckbox
        title="Wine type"
        items={wineType}
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters} 
      />
      <WineCheckbox
        title="Wine country"
        items={wineCountry}
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters}
      />
      <FilterSubmitButton onClick={handleFilterSubmit} />
    </Box>
  );
}

export default SidebarFilter;
