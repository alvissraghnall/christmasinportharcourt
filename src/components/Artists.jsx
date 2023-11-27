import React from 'react'
import { Link } from 'react-router-dom'

export default function Artists() {
    return (
        <>
            {/* Artists */}
            <section className="container py-5 my-2 my-md-4 my-lg-5">
                <div className="d-md-flex align-items-center justify-content-between text-center text-md-start pt-md-1 pt-lg-3">
                    <h2 className="h1 mb-4 mb-md-0 me-md-3">Performing Artists</h2>
                    <Link to="/contact" className="btn btn-danger btn-lg">
                        Become a sponsor
                        <i className=" bx bx-right-arrow-alt fs-4 lh-1 ms-2 me-n1" />
                    </Link>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mt-lg-4">

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/avatar/magnito.jpg" className="rounded-3" alt="Magnito" />
                            </div>
                            <div className="card-body text-center p-3">
                                <h2 className="fs-xl fw-semibold pt-0 mb-2">Magnito</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/avatar/2slik.jpg" className="rounded-3" alt="2Slik" />
                            </div>
                            <div className="card-body text-center p-3">
                                <h2 className="fs-xl fw-semibold pt-0 mb-2">2slik</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/avatar/sunni.jpg" className="rounded-3" alt="Legendary Suni" />
                            </div>
                            <div className="card-body text-center p-3">
                                <h2 className="fs-xl fw-semibold pt-0 mb-2">Legendary Suni</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/avatar/cavemen.jpg" className="rounded-3" alt="The Cavemen Live in CIPH" />
                            </div>
                            <div className="card-body text-center p-3">
                                <h2 className="fs-xl fw-semibold pt-0 mb-2">The Cavemen</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/avatar/sabinus.jpg" className="rounded-3" alt="Sabinus Live in CIPH" />
                            </div>
                            <div className="card-body text-center p-3">
                                <h2 className="fs-xl fw-semibold pt-0 mb-2">Sabinus</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-hover border-0 bg-transparent">
                            <div className="position-relative">
                                <img src="assets/img/avatar/romeo-wj.jpg" className="rounded-3" alt="Romeo WJ Live in CIPH" />
                            </div>
                            <div className="card-body text-center p-3">
                                <h2 className="fs-xl fw-semibold pt-0 mb-2">Romeo WJ</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
