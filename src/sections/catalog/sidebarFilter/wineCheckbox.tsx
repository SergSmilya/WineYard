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
import checkboxIcon from "../../../assets/icons/checkbox.svg";
import checkboxCheckedIcon from "../../../assets/icons/checkbox-checked.svg";
import { useState } from "react";

interface WineCheckboxProps {
  title: string;
  items: string[];
}

function WineCheckbox({ title, items }: WineCheckboxProps) {
  const [showList, setShowList] = useState(true);

  const menuAnimation = {
    display: showList ? 'flex' : 'none',
  };


  return (
    <Box sx={{}}>
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
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "33px",
          }}
        >
          {title}
        </Typography>
        <IconButton onClick={() => setShowList(!showList)} sx={{ width: "30px", height: "30px" }}>
          <img src={hideIcon} alt="" />
        </IconButton>
      </Stack>
      <FormGroup sx={{...menuAnimation}}>
        {items.map((item) => (
          <FormControlLabel
            control={
              <Checkbox icon={<img src={checkboxIcon} alt="" />} checkedIcon={<img src={checkboxCheckedIcon} alt="" />} />
            }
            label={item}
            key={item}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default WineCheckbox;
