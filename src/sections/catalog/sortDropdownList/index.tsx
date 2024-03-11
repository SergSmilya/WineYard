import { useState } from "react";

import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";

const SortDropdownList = () => {
  const theme = useTheme();

  const sortTypesList = ["price low to high", "price high to low", "newest"];
  const [sortType, setSortType] = useState("");

  const handleChange = (event: any) => {
    setSortType(event.target.value);
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
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.common.white,
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
              color: theme.palette.success.contrastText,
              background: "transparent!important",
              "&:hover": {
                color: theme.palette.success.light,
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
