import { Box, Stack } from "@mui/material";
import DishButton from "./dishButton";

import withFishImg from "../../../assets/hero-slider/with-fish.jpg";
import withBirdImg from "../../../assets/hero-slider/with-bird.jpeg";
import withMeatImg from "../../../assets/hero-slider/with-meat.jpg";
import withCheeseImg from "../../../assets/hero-slider/with-cheese.jpg";

function DishButtons() {
  return (
    <Box sx={{
      display: "flex",
      gap: "10px"
    }}>
      <Stack sx={{
        display: "flex",
        flexDirection :"row",
        gap: "10px"
      }}>
        <DishButton
          text="Red meat"
          sx={{
            imageUrl: withMeatImg,
            radius: "0 220px 220px 0",
            justifyContent: "start",
          }}
        />
        <DishButton
          text="Poultry meat"
          sx={{
            imageUrl: withBirdImg,
            radius: "220px 0 0 220px",
            justifyContent: "end",
          }}
        />
      </Stack>
      <Stack sx={{
        display: "flex",
        flexDirection :"row",
        gap: "10px"
      }}>
        <DishButton
          text="Cheese"
          sx={{
            imageUrl: withCheeseImg,
            radius: "0 220px 220px 0",
            justifyContent: "start",
          }}
        />
        <DishButton
          text="Fish & Seafood"
          sx={{
            imageUrl: withFishImg,
            radius: "220px 0 0 220px",
            justifyContent: "end",
          }}
        />
      </Stack>
    </Box>
  );
}

export default DishButtons;
