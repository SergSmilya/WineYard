import { Box, Stack } from "@mui/material";
import DishButton from "./dishButton";

import { buttonData } from "./buttonData";
import { dishNames } from "../../../config/dishNames";

interface DishButtonsProps {
  handleDishChange: (name: string) => void;
}

const DishButtons: React.FC<DishButtonsProps> = ({ handleDishChange }) => {
  const handleClick = (name: string) => {
    handleDishChange(name);
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
          display: { xs: "grid", lg: "flex" },
          flexDirection: { lg: "row" },
          gridTemplateColumns: { xs: "1fr 1fr" },
          gap: { xs: "9px", lg: "10px" },
          width: "100%"
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
};

export default DishButtons;
