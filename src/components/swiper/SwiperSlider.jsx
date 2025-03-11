import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { sliderData } from "../../../staticData";
import "./Swiper.css";
function SwiperSlider() {
  const swiperData = sliderData;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default SwiperSlider;
