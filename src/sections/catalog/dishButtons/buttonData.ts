import withFishImg from "../../../assets/hero-slider/with-fish.jpg";
import withBirdImg from "../../../assets/hero-slider/with-bird.jpeg";
import withMeatImg from "../../../assets/hero-slider/with-meat.jpg";
import withCheeseImg from "../../../assets/hero-slider/with-cheese.jpg";

export const buttonData = [
  {
    text: "Red meat",
    sx: {
      imageUrl: withMeatImg,
      radius: "0 220px 220px 0",
      justifyContent: "start",
    },
  },
  {
    text: "Poultry meat",
    sx: {
      imageUrl: withBirdImg,
      radius: "220px 0 0 220px",
      justifyContent: "end",
    },
  },
  {
    text: "Cheese",
    sx: {
      imageUrl: withCheeseImg,
      radius: "0 220px 220px 0",
      justifyContent: "start",
    },
  },
  {
    text: "Fish & Seafood",
    sx: {
      imageUrl: withFishImg,
      radius: "220px 0 0 220px",
      justifyContent: "end",
    },
  },
];