import { useState, useEffect } from 'react'
import client from '../sanity-client';
import { motion, useAnimation } from 'framer-motion';
import styles from './styles/Ticket.module.css';
import { PayPalButtons } from "@paypal/react-paypal-js";
import NavbarLight from '../components/NavbarLight';
import { validators } from '../validator';

export default function Ticket() {
    const controls = useAnimation();
    const publicKey = "pk_live_ca29b8b11c2a076e05f003f4f4ff697ab37a387c"
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertKind, setAlertKind] = useState('success');
    const [formData, setFormData] = useState({
        name: {
            touched: false,
            error: true,
            value: ''
        },
        email: {
            touched: false,
            error: true,
            value: ''
        },
        amount: {
            touched: false,
            error: true,
            value: 3000
        },
        phone: {
            touched: false,
            error: true,
            value: ''
        },
    });

    const setFieldValue = (field, value, blur) => setFormData(prevState => {
        console.log(value, blur,);
        return {
            ...prevState,
            [field]: {
                // ...prevState[field as keyof FormState],
                value: value ?? prevState[field]["value"],
                touched: blur ?? prevState[field]["touched"],
                error: !validators[field](value ?? prevState[field]["value"]) ? true : false
            }
        }
    });

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        setFieldValue(name, value, false);
        console.log(formData);
    }

    const handleBlur = (ev) => {
        const { name } = ev.target;
        setFieldValue(name, null, true);
    }

    // const handleChange = (ev) => {
    //     const { name, value } = ev.currentTarget;

    //     setFormData({
    //         ...formData,
    //         [name]: {
    //             value,
    //         }
    //     });
    // }

    // const componentProps = {
    //     name,
    //     phone,
    //     email,
    //     amount: parseInt(amount) * 100,
    //     metadata: {
    //         name,
    //         phone,
    //         email,
    //         amount,
    //     },
    //     publicKey,
    //     text: "Buy Ticket",
    //     onSuccess: () => {
    //         setAmount("")
    //         setEmail("")
    //         setName("")
    //         setPhone("")
    //         alert("Welcome on board!")
    //     },
    //     onClose: () => alert("Wait! Don't leave :("),
    // }

    // const spinner = <div className={styles.ticket} style={{
    //     display: "flex", gap: ".75rem",
    //     justifyContent: "center", alignItems: "center",
    // }}>

    //     <div style={{
    //         position: "relative", width: "2rem", height: "2rem"
    //     }}>
    //         <motion.span
    //             style={{
    //                 border: "0.25rem", borderStyle: "solid", borderColor: "#e9e9e9",
    //                 width: "2rem", height: "2rem", display: "block",
    //                 borderTopColor: "#3498db", boxSizing: "border-box",
    //                 position: "absolute", top: 0, borderRadius: "999px",
    //                 left: 0, borderTop: ".25rem"
    //             }}
    //             animate={{
    //                 rotate: 360
    //             }}
    //             transition={{
    //                 repeat: Infinity,
    //                 duration: 1,
    //                 ease: "linear",
    //                 repeatType: 'loop',
    //                 type: 'tween'
    //             }}
    //         >

    //         </motion.span>
    //     </div>
    //     <span style={{
    //         color: "#fff", opacity: .89
    //     }}>Loading...</span>
    // </div>

    const validateForm = (data, actions) => {
        // ev.preventDefault();
        console.log(actions);
        if(Object.values(formData).some(el => el.error === true)) {
            console.log(actions, "eej");
            alert("Please fill out the form completely!");
            return actions.reject();
        }
        return actions.resolve();
    }

    const { name, email, phone, amount } = formData;

    const startAnimation = async () => {
        await controls.start({
            x: 0, // Adjust the x position as needed
            opacity: 1, // Fade in
            transition: { duration: 0.5 },
        });
    };

    function createOrder() {
        return fetch(`${import.meta.env.VITE_URL}/api/orders`, {
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
            const response = await fetch(`${import.meta.env.VITE_URL}/api/orders/${data.orderID}/capture`, {
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
            // alert(`Transaction completed by ${name}`);

            const ticket = {
                _type: 'ticket',
                name: formData.name.value,
                email: formData.email.value,
                phone: formData.phone.value,
                kind: parseInt(formData.amount.value) <= 5000 ? "REGULAR" : "VIP"
            }

            client.create(ticket)
                .then(() => {
                    setLoading(false);
                    setAlert(true);
                })
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
                                        <input type="text" id="name" value={name.value}
                                            onChange={handleInputChange} name="name"
                                            onBlur={handleBlur} className="form-control form-control-lg" required />
                                        {/* <div className="invalid-feedback position-absolute start-0 top-100">Please enter your name!</div> */}
                                        {(formData.name.touched && !validators.name(formData.name.value)) && <div className="my-1 text-sm w-100 pl-1 invalid-feedback position-absolute start-0 top-100">
                                            Name must have at least 3 characters.
                                        </div>}
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="email" className="form-label fs-base">Email</label>
                                        <input type="email" id="email" value={email.value}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur} name="email" className="form-control form-control-lg" required />
                                        {/* <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div> */}
                                        {(formData.email.touched && !validators.email(formData.email.value)) && <div className="my-1 text-sm w-100 pl-1 invalid-feedback position-absolute start-0 top-100">
                                            Email must be a valid email!
                                        </div>}
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="phone" className="form-label fs-base">Phone </label>
                                        <input type="tel" id="phone" name="phone" value={phone.value}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur} className="form-control form-control-lg" required />
                                        {/* <div className="invalid-feedback position-absolute start-0 top-100">Please enter a password!</div> */}
                                        {(formData.phone.touched && !validators.phone(formData.phone.value)) && <div className="my-1 text-sm w-100 pl-1 invalid-feedback position-absolute start-0 top-100">
                                            Phone Number must be valid!
                                        </div>}
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="amount" className="form-label fs-base">Select ticket type</label>
                                        <select id="amount" defaultValue={amount.value}
                                            onChange={handleInputChange} name='amount'
                                            className="form-select form-select-lg" required>
                                            <option value='0' disabled>Choose ticket category</option>
                                            <option value={3000}>Regular (₦3,000)</option>
                                            <option value={10000}>VIP (₦10,000)</option>
                                        </select>
                                        {/* <div className="invalid-feedback position-absolute start-0 top-100">Please choose an amount!</div> */}
                                    </div>
                                </motion.div>
                            </div>
                        </form>
                        <PayPalButtons onClick={validateForm} style={{ layout: "horizontal" }} className="btn p-0 w-100 mt-2" createOrder={createOrder}
                            onApprove={onApprove} />
                    </div>
                    <div className="w-100 align-self-end">
                        <span className="opacity-80">&copy; {(new Date().getFullYear())} CIPH. All rights reserved. Built by <a href="https://www.webify.com.ng" target="_blank" rel="noopener noreferrer">Webify</a></span>
                    </div>
                </div>
                {/* Background */}
                <div className="position-fixed top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'VITE_url(assets/img/closedbg.jpg)' }} />


                {alert && <div className={`alert alert-${alertKind}`}>
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={e => setAlert(false)}>&times;</button>
                    <strong>Ticket purchase successful!</strong>

                    <p>Transaction completed by {name.value}!</p>
                </div>}

            </section>
        </div>
    )
}
