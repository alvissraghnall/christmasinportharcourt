import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        {/* Footer */}
        <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
            <div className="container text-center pt-lg-3">
                <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
                    <img src="assets/img/logolight.svg" className="me-2" width={200} alt="Logo" />
                </div>
                <ul className="nav justify-content-center pt-3">
                    <li className="nav-item"><Link to='/terms' className="nav-link">Terms & Conditions</Link></li>
                    <li className="nav-item"><Link to='/privacy-policy' className="nav-link">Privacy Policy</Link></li>
                </ul>
                <div className="d-flex justify-content-center pt-4 mt-lg-3">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-facebook mx-2">
                        <i className="bx bxl-facebook" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-instagram mx-2">
                        <i className="bx bxl-instagram" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-youtube mx-2">
                        <i className="bx bxl-youtube" />
                    </a>
                </div>
                <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
                    <span className="opacity-80">© {(new Date().getFullYear())} CIPH. All rights reserved.</span>
                </p>
            </div>
        </footer>
    </>
  )
}
