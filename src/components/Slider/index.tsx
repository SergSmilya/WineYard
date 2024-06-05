import React, { ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

interface SliderProps {
  children: ReactNode;
  handleSlideChange?: (swiper: any) => void;
  initialSlide?: number;
  onSwiper?: (swiper: any) => void;
}

function Slider({
  children,
  handleSlideChange,
  initialSlide,
  onSwiper,
}: SliderProps) {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      onSlideChange={handleSlideChange}
      initialSlide={initialSlide}
      onSwiper={onSwiper}
      modules={[Keyboard, Pagination, Navigation]}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
