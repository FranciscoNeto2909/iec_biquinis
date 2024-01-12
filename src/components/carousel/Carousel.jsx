/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade';
import "./carousel.css"

export default function Carousel({ images }) {

    return (
        <Swiper
            slidesPerView={1}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {images.map((img, i) => (
                <SwiperSlide key={i} >
                    <div className="carousel">
                        <img src={img} className="carousel_img" alt="" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}