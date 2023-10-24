import React from 'react'
import NavbarLight from '../components/NavbarLight'

export default function TicketClosed() {
  return (
    <div>
        <NavbarLight />

        <section className="position-relative vh-100 pt-5 pb-4">
            {/* Sign up form */}
            <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{maxWidth: '526px'}}>
                    <img src='assets/img/close.png' wdith='10px' alt='ticket closed' />

                </div>
                <div className="w-100 align-self-end">
                    <span className="opacity-80">© {(new Date().getFullYear())} CIPH. All rights reserved. Built by <a href="https://www.thankgodokoro.xyz/" target="_blank" rel="noopener noreferrer">TeeGee</a></span>
                </div>
            </div>
            {/* Background */}
            <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{backgroundImage: 'url(assets/img/closedbg.jpg)'}} />
        </section>
    </div>
  )
}
