/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade';
import "./carousel.css"
import { useEffect, useState } from "react";

export default function Carousel({ images }) {
    const [navigation, setNavigation] = useState(false)

    function handleResize() {
        if (window.innerWidth > 500) {
            setNavigation(true)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize())
        return () => {
            window.removeEventListener("resize", handleResize())
        }
    }, [navigation])


    return (
        <Swiper
            slidesPerView={1}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={navigation ? true : false}
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