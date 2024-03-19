import { Box, Stack } from "@mui/material";
import DishButton from "./dishButton";

import { useDishSorting } from "../../../hooks/useDishSorting";
import { buttonData } from "./buttonData";
import { dishNames } from "../../../config/dishNames";

const page = 1;

function DishButtons() {
  const { redMeatWines, cheeseWines, fishWines, poultryWines } = useDishSorting(page);

  const handleClick = (dishName: string) => {
    try {
      switch (dishName) {
        case 'Red meat':
          console.log(redMeatWines);
          break;
        case 'Cheese':
          console.log(cheeseWines);
          break;
        case 'Fish and seafood':
          console.log(fishWines);
          break;
        case 'Poultry meat':
          console.log(poultryWines);
          break;
        default:
          console.log(`Unknown dish: ${dishName}`);
      }
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


