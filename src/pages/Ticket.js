import React from 'react'
import NavbarLight from '../components/NavbarLight'

export default function Ticket() {
  return (
    <div>
        <NavbarLight />

        <section className="position-relative vh-100 pt-5 pb-4">
            {/* Sign up form */}
            <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{maxWidth: '526px'}}>
                    <h1 className="text-center text-xl-start">Buy your Ticket</h1>
                    <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-12">
                        <div className="position-relative mb-4">
                            <label htmlFor="name" className="form-label fs-base">Full name</label>
                            <input type="text" id="name" className="form-control form-control-lg" required />
                            <div className="invalid-feedback position-absolute start-0 top-100">Please enter your name!</div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="position-relative mb-4">
                            <label htmlFor="email" className="form-label fs-base">Email</label>
                            <input type="email" id="email" className="form-control form-control-lg" required />
                            <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div>
                        </div>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="password" className="form-label fs-base">Phone </label>
                            <div className="password-toggle">
                                <input type="password" id="password" className="form-control form-control-lg" required />
                                <div className="invalid-feedback position-absolute start-0 top-100">Please enter a password!</div>
                            </div>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="state" className="form-label fs-base">Select ticket type</label>
                            <select id="state" className="form-select form-select-lg" required>
                                <option value='0' selected disabled>Choose ticket category</option>
                                <option value="1500">Regular</option>
                                <option value="5000">VIP</option>
                            </select>
                            <div className="invalid-feedback position-absolute start-0 top-100">Please choose your state!</div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg w-100 mt-2">Buy Ticket</button>
                    </form>
                </div>
                <div className="w-100 align-self-end">
                    <span className="opacity-80">© {(new Date().getFullYear())} CIPH. All rights reserved. Built by <a href="https://www.thankgodokoro.xyz/" target="_blank" rel="noopener noreferrer">TeeGee</a></span>
                </div>
            </div>
            {/* Background */}
            <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{backgroundImage: 'url(assets/img/ticketbg.jpg)'}} />
        </section>
    </div>
  )
}
