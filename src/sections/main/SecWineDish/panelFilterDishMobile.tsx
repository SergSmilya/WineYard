import { useDispatch } from "react-redux";
import { setActiveCategory } from "../../../store/categoriesSlice";
import Slider from "../../../components/Slider";
import { Typography } from "@mui/material";

import "./index.css";
import { success } from "../../../theme/palette";

interface PanelFilterDish {
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

export default function PanelFilterDishMobile({ categories }: PanelFilterDish) {
  const dispatch = useDispatch();

  const handleSlideChange = (swiper: any) => {
    const categoryId = categories[swiper.realIndex].id;
    dispatch(setActiveCategory(categoryId));
  };

  return (
    <div className="dishPanel">
      <Slider handleSlideChange={handleSlideChange}>
        {categories.map(({ id, name }) => (
          <Typography
            key={id}
            variant="h3"
            color={success.dark}
            sx={{
              cursor: "pointer",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Best with {name}
          </Typography>
        ))}
      </Slider>
    </div>
  );
}
