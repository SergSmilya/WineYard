import { useState, useEffect } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { success } from "../../../theme/palette";

import { wineColor, wineType } from "../../../config/wineFilters";
import { useCountryList } from "../../../hooks/useCountryList";
import PriceRange from "../sidebarFilter/priceRange";
import WineCheckbox from "../sidebarFilter/wineCheckbox";
import FilterSubmitButton from "../sidebarFilter/filterSubmitButton";

import closeIcon from "../../../assets/icons/close.svg";

interface FiltersModalProps {
  setFilters: (filters: string) => void;
  isFilterCleared: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FiltersModal({
  setFilters,
  isFilterCleared,
  setShowModal
}: FiltersModalProps) {
  const countryList = useCountryList();
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedPrice, setSelectedPrice] = useState("");
  const [resetFilters, setResetFilters] = useState(false);

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
      queryStringArray.push(price);
    }
    return queryStringArray.join("&");
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
    setFilters(constructedQueryString);
    setShowModal(false);
  };

  const handleClearFilters = () => {
    setResetFilters(true);
    setShowModal(false)
  };

  useEffect(() => {
    if (resetFilters) {
      setSelectedFilters({}); // Очищення фільтрів після подання
      setSelectedPrice("");
      setResetFilters(false); // Скидання значення для очищення фільтрів
    }
  }, [resetFilters]);

  useEffect(() => {
    if (isFilterCleared) {
      setResetFilters(true);
    }
  }, [isFilterCleared]);

  return (
    <Box
      sx={{
        color: success.dark,
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        minWidth: "325px"
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "36px",
          }}
        >
          Filters
        </Typography>
        <IconButton onClick={handleClearFilters}>
            <img src={closeIcon} alt="" width="24px" height="24px" />
          </IconButton>
      </Stack>
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
        items={countryList}
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters}
      />
      <FilterSubmitButton onClick={handleFilterSubmit} />
    </Box>
  );
}

export default FiltersModal;
