import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavbarLight() {
  return (
    <>
        {/* Navbar */}
        <header className="header navbar navbar-expand-lg position-absolute navbar-sticky">
            <div className="container px-3">
            <Link to='/' className="navbar-brand pe-3">
                <img src="assets/img/new-logo.jpeg" width={110} height={50} style={{ height: "50px"}} alt="Logo" />
            </Link>
            <div id="navbarNav" className="offcanvas offcanvas-end">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Gallery</a>
                            <ul className="dropdown-menu">
                                <li><NavLink to='/gallery-v1' className="dropdown-item">Maiden Edition</NavLink></li>
                                <li><NavLink to='/gallery-v2' className="dropdown-item">Home Coming</NavLink></li>
                            </ul>
                        </li>
                      <li className="nav-item">
                            <NavLink to='/merch' className="nav-link">Merch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>     
            </div>
            
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            </div>
        </header>
    </>
  )
}
