import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
        {/* <Navbar /> */}
            <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
                <div className="row py-5 pt-lg-6 pt-6">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
                            <iframe className="d-block h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6802394289116!2d6.998407014927483!3d4.824859041911507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce7a3cc2d1d1%3A0xc98c0e0dac04f4b5!2sEdiz%20Wine%20Bar!5e0!3m2!1sen!2sng!4v1668558676989!5m2!1sen!2sng" style={{border: 0, minHeight: '300px'}} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <h2 className="h4 mb-4">Contact Details</h2>
                        <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
                            <li className="d-flex pb-1 mb-2">
                                <i className="bx bx-map text-primary fs-xl me-2" style={{marginTop: '.125rem'}} />
                                11a Emeyal Street, GRA PHASE 3 500272, Port Harcourt.
                            </li>
                            <li className="d-flex pb-1 mb-2">
                                <i className="bx bx-phone-call text-primary fs-xl me-2" style={{marginTop: '.125rem'}} />
                                08067300000
                            </li>
                            <li className="d-flex">
                                <i className="bx bx-envelope text-primary fs-xl me-2" style={{marginTop: '.125rem'}} />
                                <div>
                                 info@christmasinportharcourt.com
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex pt-1 pt-md-3 pt-xl-4">
                        <a href="/" className="btn btn-icon btn-secondary btn-facebook me-3">
                            <i className="bx bxl-facebook" />
                        </a>
                        <a href="/" className="btn btn-icon btn-secondary btn-instagram me-3">
                            <i className="bx bxl-instagram" />
                        </a>
                        <a href="/" className="btn btn-icon btn-secondary btn-youtube">
                            <i className="bx bxl-youtube" />
                        </a>
                        </div>
                    </div>
                </div>
            </section>
        {/* <Footer /> */}
    </>
  )
}
