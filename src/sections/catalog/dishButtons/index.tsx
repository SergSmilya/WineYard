import { Box, Stack } from "@mui/material";
import DishButton from "./dishButton";

import { buttonData } from "./buttonData";
import { dishNames } from "../../../config/dishNames";

function DishButtons() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        {buttonData.map((button, index) => (
          <DishButton
            key={index}
            {...button}
            onClick={() => alert(dishNames[index])}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default DishButtons;


