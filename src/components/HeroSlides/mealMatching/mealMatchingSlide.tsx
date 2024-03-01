import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SlideCard from "./slideCard";

import withFishImg from "../../../assets/hero-slider/with-fish.jpg";
import withBirdImg from "../../../assets/hero-slider/with-bird.jpeg";
import withMeatImg from "../../../assets/hero-slider/with-meat.jpg";
import withCheeseImg from "../../../assets/hero-slider/with-cheese.jpg";

function MealMatchingSlide() {
  const theme = useTheme();

  return (
    <div className="swiper-slide">
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          borderRadius: "0px",
          height: "810px",
          color: theme.palette.info.main,
          paddingTop: "50px",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          container
          direction="row"
          xs={12}
          justifyContent="space-around"
        >
          <SlideCard
            text="Red meat"
            sx={{
              imageUrl: withMeatImg,
              radius: "0 220px 220px 0",
              justifyContent: "start",
            }}
            link=""
          />

          <SlideCard
            text="Bird meat"
            sx={{
              imageUrl: withBirdImg,
              radius: "220px 0 0 220px",
              justifyContent: "end",
            }}
            link=""
          />
        </Grid>

        <Grid
          item
          container
          direction="row"
          xs={12}
          justifyContent="space-around"
        >
          <SlideCard
            text="Cheese"
            sx={{
              imageUrl: withCheeseImg,
              radius: "0 220px 220px 0",
              justifyContent: "start",
            }}
            link=""
          />

          <SlideCard
            text="Fish & Seafood"
            sx={{
              imageUrl: withFishImg,
              radius: "220px 0 0 220px",
              justifyContent: "end",
            }}
            link=""
          />
        </Grid>

        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "48px",
            lineHeight: "48px",
          }}
        >
          CHOOSE <br /> THE RIGHT WINE <br /> TO GO WITH <br /> THE MEAL
        </Typography>
      </Grid>
    </div>
  );
}

export default MealMatchingSlide;
