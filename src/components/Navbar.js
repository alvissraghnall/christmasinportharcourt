import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        {/* Navbar */}
        <header className="header navbar navbar-expand-lg bg-light shadow-sm fixed-top">
            <div className="container px-3">
            <Link to='/' className="navbar-brand pe-3">
                <img src="assets/img/logo.svg" width={110} alt="Logo" />
            </Link>
            <div id="navbarNav" className="offcanvas offcanvas-end">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body mx-auto">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/activities' className="nav-link">Activities</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/gallery' className="nav-link">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/faq' className="nav-link">FAQ's</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas-header border-top">
                    <a href="/" className="btn btn-dark w-100" target="_blank" rel="noopener">
                        <i className="bx bx-cart fs-4 lh-1 me-1" />
                        &nbsp;Buy Ticket
                    </a>
                </div>      
            </div>
            
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <a href="/" className="btn btn-dark btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noopener">
                <i className="bx bx-cart fs-5 lh-1 me-1" />
                &nbsp;Buy Ticket
            </a>
            </div>
        </header>
    </>
  )
}
