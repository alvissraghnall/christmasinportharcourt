import React from 'react'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sponsors from '../components/Sponsors'

export default function About() {
    return (
        <>
            {/* <Navbar /> */}
            {/* Hero */}
            <section className="position-relative pt-5 pb-5">
                {/* Background */}
                <div className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0" style={{ backgroundImage: 'url(assets/img/about/hero-bg.svg)' }}>
                </div>
                {/* Content */}
                <div className="container position-relative zindex-5 pt-5">
                    <div className="row">
                        <div className="col-lg-6 mt-5 pt-4">
                            <h1 className="pb-2 pb-md-3">About CIPH</h1>
                            <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{ maxWidth: '526px' }}>Christmas in Port Harcourt 2023 edition themed "The Consolidation" is a socio-cultural event in Port Harcourt city, with the objective of promoting, exposing and appreciating art, beauty, cultural heritage and lifestyle of Rivers State, Niger Delta and Nigeria to the world. </p>
                            <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{ maxWidth: '526px' }}>Christmas in Port Harcourt is an annual event that kicked-off in the year 2017 and has been successfully organized for five years. It is also organized by Ediz wine bar is established in Port Harcourt city, under corporate allied laws governing nation. We are stakeholders in hospitality, culture and tourism sector of the economy.</p>
                            <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{ maxWidth: '526px' }}>Ediz wine bar currently serves over 200,000 customers in the media world, fashion & lifestyle, hospitality, commerce industries, manufacturing formal & informal sectors of the economy respectively.</p>
                        </div>
                        {/* Images */}
                        <div className="col-lg-6 mt-xl-4 pt-5 pt-lg-4">
                            <div className="row row-cols-2 gx-3 gx-lg-4">
                                <div className="col pt-lg-5 mt-lg-1">
                                    <img src="assets/img/about1.png" className="d-block rounded-3 mb-3 mb-lg-4" alt="About" />
                                    <img src="assets/img/about4.png" className="d-block rounded-3 mb-3 mb-lg-4" alt="About" />
                                </div>
                                <div className="col">
                                    <img src="assets/img/about2.jpeg" className="d-block rounded-3 mb-3 mb-lg-4" alt="About" />
                                    <img src="assets/img/about3.jpeg" className="d-block rounded-3 mb-3 mb-lg-4" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Sponsors />
            <Cta />
            {/* <Footer /> */}
        </>
    )
}
