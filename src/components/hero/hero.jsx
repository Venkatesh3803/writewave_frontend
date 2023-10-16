import "./hero.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideContent from "../slideContent/slideContent";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

const Hero = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const fetchingBlogs = async () => {
            const res = await publicRequest.get(`/post?category=health`)
            setBlog(res.data)
        }
        fetchingBlogs()
    }, [])


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
                {blog.slice(0, 5).map((b) => {
                    return (
                        <SwiperSlide key={b._id}>
                            <SlideContent data={b} />
                        </SwiperSlide>

                    )
                })}
            </Swiper>

        </div>
    )
}

export default Hero
