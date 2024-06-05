import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const activeCategory = useSelector(
    (state: any) => state.categories.activeCategory
  );
  const dispatch = useDispatch();
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    const categoryId = categories[swiper.realIndex].id;
    dispatch(setActiveCategory(categoryId));
  };

  const initialSlide = categories.findIndex(
    (category) => category.id === activeCategory
  );

  useEffect(() => {
    if (swiperRef.current) {
      const categoryIndex = categories.findIndex(
        (category) => category.id === activeCategory
      );
      if (categoryIndex !== -1) {
        swiperRef.current.slideToLoop(categoryIndex);
      }
    }
  }, [activeCategory, categories]);

  return (
    <div className="dishPanel" id="wine-with-dish">
      <Slider
        handleSlideChange={handleSlideChange}
        initialSlide={initialSlide}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
      >
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
