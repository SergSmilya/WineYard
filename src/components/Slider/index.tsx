import React, { ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

interface SliderProps {
  children: ReactNode;
}

function Slider({ children }: SliderProps) {
  return (
    <Swiper
      loop= {true}
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Keyboard, Pagination, Navigation]}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
