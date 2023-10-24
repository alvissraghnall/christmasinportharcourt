import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="footer dark-mode bg-dark pt-5 pb-4 pb-lg-5">
                <div className="container text-center pt-lg-3">
                    <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
                        <img src="assets/img/logolight.svg" className="" width={200} alt="Logo" />
                    </div>
                    {/* <ul className="nav justify-content-center pt-3">
                    <li className="nav-item"><Link to='/terms' className="nav-link">Terms & Conditions</Link></li>
                    <li className="nav-item"><Link to='/privacy-policy' className="nav-link">Privacy Policy</Link></li>
                </ul> */}
                    <div className="d-flex justify-content-center pt-4 mt-lg-3">
                        <a href="https://www.facebook.com/profile.php?id=100076490288892" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-facebook mx-2">
                            <i className="bx bxl-facebook" />
                        </a>
                        <a href="https://www.instagram.com/christmasinportharcourtng" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-instagram mx-2">
                            <i className="bx bxl-instagram" />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-secondary btn-youtube mx-2">
                            <svg
                                class="w-6 h-6 text-blue-300 fill-current"
                                style={{ height: "1.5rem", width: "1.5rem", color: "blue", fill: "currentcolor" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
                        <span className="opacity-80">© {(new Date().getFullYear())} CIPH. All rights reserved.<br />Built by <a href="https://www.webify.com.ng" target="_blank" rel="noopener noreferrer">
                            Webify
                        </a></span>
                    </p>
                </div>
            </footer>
        </>
    )
}
