import "./hero.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideContent from "../slideContent/slideContent";

const Hero = () => {
    return (
        <div className="hero">

            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Trending</h1>
            <Swiper className="swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={Infinity}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
               
            >

                <SwiperSlide>
                    <SlideContent />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideContent />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent />
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Hero
