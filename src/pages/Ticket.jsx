import { useState, useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
// import { PaystackButton } from 'react-paystack'
import { PayPalButtons } from "@paypal/react-paypal-js";
import NavbarLight from '../components/NavbarLight'

export default function Ticket() {
    const controls = useAnimation();
    const publicKey = "pk_live_ca29b8b11c2a076e05f003f4f4ff697ab37a387c"
    const [amount, setAmount] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        name,
        phone,
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
            alert("Welcome on board!")
        },
        onClose: () => alert("Wait! Don't leave :("),
    }

    const validateForm = ev => {
        ev.preventDefault();
    }

    const startAnimation = async () => {
        await controls.start({
            x: 0, // Adjust the x position as needed
            opacity: 1, // Fade in
            transition: { duration: 0.5 },
        });
    };

    function createOrder() {
        return fetch(`${import.meta.env.URL}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                amount, email, name, phone
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    }

    async function onApprove(data) {
        try {
            const response = await fetch(`${import.meta.env.URL}/api/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID
                })
            });
            const orderData = await response.json();
            const name = orderData.payer.name.given_name;
            alert(`Transaction completed by ${name}`);

            fetch(`${import.meta.env.URL}/api/ticket`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    profession, instagramLink, twitterLink, stageName, demoSong
                })
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    alert("Artiste Registration complete!");
                }).catch((err) =>
                    console.error(err));
        } catch (error) {
            alert("An error occured!");
        }

    }


    useEffect(() => {
        startAnimation();
    }, []);

    return (

        <div>
            {/* <Navigate to='/closed' /> */}

            <NavbarLight />

            <section className="position-relative vh-100 pt-5 pb-4">
                {/* Sign up form */}
                <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                    <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: '526px' }}>
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: [0, .4, 1] }} className="text-center text-xl-start">Buy your Ticket</motion.h1>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="name" className="form-label fs-base">Full name</label>
                                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your name!</div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="email" className="form-label fs-base">Email</label>
                                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="phone" className="form-label fs-base">Phone </label>
                                        <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter a password!</div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="amount" className="form-label fs-base">Select ticket type</label>
                                        <select defaultValue={3000} id="amount" onChange={(e) => setAmount(e.target.value)} className="form-select form-select-lg" required>
                                            <option value='0' disabled>Choose ticket category</option>
                                            <option value={3000}>Regular (₦3,000)</option>
                                            <option value={10000}>VIP (₦10,000)</option>
                                        </select>
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please choose an amount!</div>
                                    </div>
                                </motion.div>
                            </div>
                        </form>
                        <PayPalButtons onClick={validateForm} style={{ layout: "horizontal" }} className="btn btn-danger btn-lg w-100 mt-2" createOrder={createOrder}
                            onApprove={onApprove} />
                    </div>
                    <div className="w-100 align-self-end">
                        <span className="opacity-80">© {(new Date().getFullYear())} CIPH. All rights reserved. Built by <a href="https://www.webify.com.ng" target="_blank" rel="noopener noreferrer">Webify</a></span>
                    </div>
                </div>
                {/* Background */}
                <div className="position-fixed top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/closedbg.jpg)' }} />
            </section>
        </div>
    )
}
