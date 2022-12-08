import React, { useState } from 'react'
import { PaystackButton } from "react-paystack"
import NavbarLight from '../components/NavbarLight'

export default function Ticket() {
    const publicKey = "pk_test_e25a7594d44ca2c2f1b0bb7483c44ae920b72309"
    const [amount, setAmount] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount: parseInt(amount) * 100,
        metadata: {
            name,
            phone,
            email,
            amount,
        },
        publicKey,
        text: "Buy Ticket",
        onSuccess: () => {
            setAmount("")
            setEmail("")
            setName("")
            setPhone("")
            alert("Thanks for doing business with us! Come back soon!!")
        },
        onClose: () => alert("Wait! Don't leave :("),
    }

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
                                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" required />
                                    <div className="invalid-feedback position-absolute start-0 top-100">Please enter your name!</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="position-relative mb-4">
                                    <label htmlFor="email" className="form-label fs-base">Email</label>
                                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" required />
                                    <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="position-relative mb-4">
                                    <label htmlFor="phone" className="form-label fs-base">Phone </label>
                                    <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} className="form-control form-control-lg" required />
                                    <div className="invalid-feedback position-absolute start-0 top-100">Please enter a password!</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="position-relative mb-4">
                                    <label htmlFor="amount" className="form-label fs-base">Select ticket type</label>
                                    <select id="amount" onChange={(e) => setAmount(e.target.value)} className="form-select form-select-lg" required>
                                        <option value='0' selected disabled>Choose ticket category</option>
                                        <option value="1500">Regular</option>
                                        <option value="5000">VIP</option>
                                    </select>
                                    <div className="invalid-feedback position-absolute start-0 top-100">Please choose your state!</div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <PaystackButton {...componentProps} className="btn btn-danger btn-lg w-100 mt-2" />
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
