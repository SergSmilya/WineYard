import { memo, useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import hideIcon from "../../../assets/icons/hide-list.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import checkboxIcon from "../../../assets/icons/checkbox.svg";
import checkboxCheckedIcon from "../../../assets/icons/checkbox-checked.svg";

interface WineCheckboxProps {
  title: string;
  items: string[];
  onFilterChange: (
    filterTitle: string,
    filterItem: string,
    isChecked: boolean
  ) => void;
  resetFilters: boolean;
}

function WineCheckbox({
  title,
  items,
  onFilterChange,
  resetFilters,
}: WineCheckboxProps) {
  const [showList, setShowList] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  useEffect(() => {
    if (resetFilters) {
      setSelectedItems([]); // Очистити обрані фільтри, якщо resetFilters === true
    }
  }, [resetFilters]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
    onFilterChange(title, item, isChecked);
  };

  const menuAnimation = {
    gap: "6px",
    display: showList ? "flex" : "none",
  };

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "33px",
          }}
        >
          {title}
        </Typography>
        <IconButton
          onClick={() => setShowList(!showList)}
          sx={{ width: "30px", height: "30px" }}
        >
          <img src={showList ? hideIcon : plusIcon} alt="" />
        </IconButton>
      </Stack>
      <FormGroup sx={{ ...menuAnimation }}>
        {items.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                icon={<img src={checkboxIcon} alt="" />}
                checkedIcon={<img src={checkboxCheckedIcon} alt="" />}
                onChange={(event) => handleChange(event, item)}
                checked={selectedItems.includes(item)}
              />
            }
            label={item}
            key={item}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default memo(WineCheckbox);
