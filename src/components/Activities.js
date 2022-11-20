import React from 'react'

export default function Activities() {
  return (
    <>
        <section id="speakers" className="container py-5 my-2 my-md-4 my-lg-5">
            <div className="align-items-center justify-content-between text-center pt-md-1 pt-lg-3">
                <h2 className="h1 mb-4 mb-md-0 me-md-3">Activities</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mt-lg-4">
                <div className="col-lg-4 col-sm-12">
                    <div className="card card-hover border-0 bg-transparent">
                        <div className="position-relative">
                            <img src="assets/img/ent.png" className="rounded-3" alt="Entertainment" />
                            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" />
                            </div>
                        </div>
                        <div className="card-body text-center p-3">
                            <h3 className="fw-semibold pt-1 mb-2">Entertainment</h3>
                            <p className="fs-sm mb-0">We are bringing your favourite guest artists to come entertain you.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="card card-hover border-0 bg-transparent">
                        <div className="position-relative">
                            <img src="assets/img/fashion.png" className="rounded-3" alt="Fasion" />
                            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" />
                            </div>
                        </div>
                        <div className="card-body text-center p-3">
                            <h3 className="fw-semibold pt-1 mb-2">Fashion</h3>
                            <p className="fs-sm mb-0">An opportunity to come witness an extraordinary fashion from our beauty pergents.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <div className="card card-hover border-0 bg-transparent">
                        <div className="position-relative">
                            <img src="assets/img/games.png" className="rounded-3" alt="Games" />
                            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" />
                            </div>
                        </div>
                        <div className="card-body text-center p-3">
                            <h3 className="fw-semibold pt-1 mb-2">Games</h3>
                            <p className="fs-sm mb-0">Fun time to play extraordinary mind games with your friends and family.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}
