import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { common, success } from "../../../theme/palette";

interface SortDropdownListProps {
  handleOrdering: (value: string) => void;
  clearAllFilters: boolean;
  isFilterCleared: boolean;
}

const SortDropdownList: React.FC<SortDropdownListProps> = ({
  handleOrdering,
  clearAllFilters,
  isFilterCleared
}) => {
  const sortTypesList = ["price low to high", "price high to low", "newest"];
  const [sortType, setSortType] = useState<string>("");

  useEffect(() => {
    if (clearAllFilters || isFilterCleared) {
      setSortType("");
    }
  }, [clearAllFilters, isFilterCleared]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value as string;
    setSortType(selectedValue);

    switch (selectedValue) {
      case "price low to high":
        handleOrdering("goods_price");
        break;
      case "price high to low":
        handleOrdering("-goods_price");
        break;
      case "newest":
        handleOrdering("-id");
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <Select
        color="primary"
        value={sortType}
        onChange={handleChange}
        displayEmpty
        sx={{
          width: "240px",
          height: "40px",
          fontSize: "16px",
          color: success.contrastText,
          backgroundColor: common.white,
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0!important",
          },
        }}
        renderValue={(selected) => `Sort by: ${selected}`}
      >
        {sortTypesList.map((item) => (
          <MenuItem
            sx={{
              fontSize: "16px",
              color: success.contrastText,
              background: "transparent!important",
              "&:hover": {
                color: success.light,
                fontWeight: "600",
                transition: "font-weight 0.5s",
              },
            }}
            value={item}
            key={item}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SortDropdownList;
