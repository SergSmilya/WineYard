import { Box, Stack } from "@mui/material";
import DishButton from "./dishButton";

import { buttonData } from "./buttonData";
import { dishNames } from "../../../config/dishNames";
import { useGetWineByDishesQuery } from "../../../RTK/wineApi";
import { useState } from "react";

function DishButtons() {
  const [dishName, setDishName] = useState("");

  const {data} = useGetWineByDishesQuery({ category: dishName });

  const handleClick = async (name: string) => {
    setDishName(name);
    console.log(data.results);
    
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


