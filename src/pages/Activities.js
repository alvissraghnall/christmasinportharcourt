import React from 'react'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Activities() {
  return (
    <div>
        <Navbar />

            <section className="container pb-2 pb-lg-3 py-5 mt-lg-6">
                {/* Item */}
                <div className="row pb-5 mb-md-4 mb-lg-5">
                    <div className="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
                        <a href="portfolio-single-project.html">
                            <img src="assets/img/ent.png" className="rounded-3" width={300} alt="Image" />
                        </a>
                    </div>
                    <div className="rellax col-md-6" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
                        <div className="ps-md-4 ms-md-2">
                            <h2 className="h3">Entertainment</h2>
                            <a href="#" className="d-table badge bg-faded-primary text-primary fs-sm mb-3">Graphic Design</a>
                            <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">We are bringing your favourite guest artists to come entertain you.</p>
                            <a href="portfolio-single-project.html" className="btn btn-outline-primary">View more</a>
                        </div>
                    </div>
                </div>
                
                <div className="row pb-5 mb-md-4 mb-lg-5">
                    <div className="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
                        <a href="portfolio-single-project.html" className="float-md-end">
                            <img src="assets/img/portfolio/list/02.jpg" className="rounded-3" width={600} alt="Image" />
                        </a>
                    </div>
                    <div className="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
                        <div className="pe-md-4 me-md-2">
                            <h2 className="h3">Fashion</h2>
                            <a href="#" className="d-table badge bg-faded-primary text-primary fs-sm mb-3">UI / UX</a>
                            <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.</p>
                            <a href="portfolio-single-project.html" className="btn btn-outline-primary">View more</a>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
        <Footer />
    </div>
  )
}
