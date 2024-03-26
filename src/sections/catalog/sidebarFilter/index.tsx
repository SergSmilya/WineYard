import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FilterHeader from "./filterHeader";
import PriceRange from "./priceRange";
import WineCheckbox from "./wineCheckbox";
import { wineColor, wineCountry, wineType } from "../../../config/wineFilters";
import FilterSubmitButton from "./filterSubmitButton";
import { useGetFilteredWineQuery } from "../../../RTK/wineApi";

function SidebarFilter() {
  const theme = useTheme();
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedPrice, setSelectedPrice] = useState("");
  const [resetFilters, setResetFilters] = useState(false);
  const [queryString, setQueryString] = useState("");

  const { data } = useGetFilteredWineQuery({ filters: queryString });

  const constructQueryString = (
    filters: {
      [key: string]: string[];
    },
    price: string
  ): string => {
    const sortedFilters: { [key: string]: string[] } = {};
    Object.keys(filters)
      .sort()
      .forEach((key) => {
        sortedFilters[key] = filters[key];
      });

    const queryStringArray: string[] = [];

    Object.entries(sortedFilters).forEach(([key, value]) => {
      if (value.length > 0) {
        const updatedKey = key.replace(/Wine/gi, "").trim().toLowerCase();
        const updatedValues = value.map((val) =>
          val.replace(/Wine/gi, "").trim()
        );
        const queryValue = updatedValues.join("%26");
        queryStringArray.push(`${updatedKey}=${queryValue}`);
      }
    });
    if (price) {
      queryStringArray.push(`price=${price}`);
    }
    const queryString = queryStringArray.join("&");
    return queryString;
  };

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
    const constructedQueryString = constructQueryString(
      selectedFilters,
      selectedPrice
    );
    setQueryString(constructedQueryString);
    setResetFilters(true); // Встановлення значення для очищення фільтрів
  };

  useEffect(() => {
    if (resetFilters) {
      setSelectedFilters({}); // Очищення фільтрів після подання
      setSelectedPrice("");
      setResetFilters(false); // Скидання значення для очищення фільтрів
    }
    if (data) {
      console.log(data);
    }
  }, [resetFilters, data]);

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
      <PriceRange
        resetFilters={resetFilters}
        setSelectedPrice={setSelectedPrice}
      />
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
