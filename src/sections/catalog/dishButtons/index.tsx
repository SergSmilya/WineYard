import { Box, Stack } from "@mui/material";
import DishButton from "./dishButton";

import { useDishSorting } from "../../../hooks/useDishSorting";
import { buttonData } from "./buttonData";
import { dishNames } from "../../../config/dishNames";
import { DishWines } from "../../../types/dishWines";

function DishButtons() {
  const dishWines: DishWines = useDishSorting();

  const handleClick = (dishName: string) => {
    try {
      console.log(`Wines for ${dishName}:`, dishWines[dishName]);
    } catch (error) {
      console.log(`Error: ${(error as Error).message}`);
    }
  };

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
            onClick={() => handleClick(dishNames[index])}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default DishButtons;
