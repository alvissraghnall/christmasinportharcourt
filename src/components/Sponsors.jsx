import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Sponsors() {
  return (
    <>
        {/* Sponsors */}
        <section className="py-5" style={{backgroundColor: '#fffaf2'}}>
            <div className="container position-relative zindex-5 pt-1 pt-md-2 pb-lg-2 pt-lg-4">
                <h2 className="h3 text-dark text-center text-lg-start mb-4 mb-lg-5">Sponsored by:</h2>
                <Swiper className="swiper mx-n2"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={8}
                    slidesPerView={3}
                    autoplay={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        200: {
                            spaceBetween: 12,
                            slidesPerView: 2
                        },

                        300: {
                            spaceBetween: 10,
                            slidesPerView: 2
                        },

                        640: {
                            spaceBetween: 8,
                            slidesPerView: 3
                        },

                        1100: {
                            spaceBetween: 8,
                            slidesPerView: 6
                        },
                    }}
                    >
                    <div className="swiper-wrapper d-flex justify-center">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-soundcity.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-nddc.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-mtv.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-rsg.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-soundcity.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-nddc.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-mtv.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/new-rsg.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/soundcity.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/family_love.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <Link to='/' className="d-block py-3">
                                    <img src="assets/img/brands/teller.png" className="d-block mx-auto" width={154} alt="Brand" />
                                </Link>
                            </div>
                        </SwiperSlide> */}
                    </div>
                    {/* Pagination (bullets) */}
                    <div className="swiper-pagination position-relative pt-2 mt-4" />
                </Swiper>  
            </div>
        </section>
    </>
  )
}
