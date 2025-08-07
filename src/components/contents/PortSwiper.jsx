import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const PortSwiper = ({ images, alt }) => {
    console.log('images:', images);
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
        >
            {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                    <img src={img} alt={alt} className="detail-img" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PortSwiper;