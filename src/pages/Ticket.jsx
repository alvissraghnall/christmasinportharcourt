import { useState, useEffect } from 'react'
import client from '../sanity-client';
import { motion, useAnimation } from 'framer-motion';
import styles from './styles/Ticket.module.css';
import { PayPalButtons } from "@paypal/react-paypal-js";
import NavbarLight from '../components/NavbarLight';
import InterswitchPay from '../components/InterswitchPay';
import { validators } from '../validator';
import { useNavigate } from "react-router-dom";
import { positions, transitions, types, useAlert } from 'react-alert';

export default function Ticket() {
    const controls = useAnimation();
    const reactAlert = useAlert();
    const navigate = useNavigate();

    const publicKey = "pk_live_ca29b8b11c2a076e05f003f4f4ff697ab37a387c";

    const [formData, setFormData] = useState({
        name: {
            touched: false,
            error: true,
            value: '',
        },
        email: {
            touched: false,
            error: true,
            value: '',
        },
        amount: {
            touched: false,
            error: false,
            value: 3000,
        },
        phone: {
            touched: false,
            error: true,
            value: '',
        },
    });

    const setFieldValue = (field, value, blur) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: {
                value: value ?? prevState[field].value,
                touched: blur ?? prevState[field].touched,
                error: !validators[field](value ?? prevState[field].value) ? true : false,
            },
        }));
        console.log(formData);
    };

    const handleInputChange = (ev) => {
        const { name, value } = ev.target;
        name === "amount" ? setFieldValue(name, parseInt(value), false) : setFieldValue(name, value, false);
    };

    const handleBlur = (ev) => {
        const { name } = ev.target;
        setFieldValue(name, null, true);
    };

    const validateForm = (data, actions) => {
        console.log(data, formData);
        // if (Object.values(formData).some((el) => el.error === true)) {
        //     reactAlert.show("Please fill out the form completely!", {
        //         type: 'error',
        //         transition: transitions.FADE,
        //     });
        //     actions.reject();
        // } else {
        //     actions.resolve();
        // }
    };

    const { name, email, phone, amount } = formData;

    const startAnimation = async () => {
        await controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        });
    };

    function createOrder() {
        return fetch(`${import.meta.env.VITE_URL}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                details: {
                    amount: amount.value,
                    email: email.value,
                    name: name.value,
                    phone: phone.value,
                },
            })
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
                    orderID: data.orderID,
                }),
            });
            const orderData = await response.json();
            const name = orderData.payer.name.given_name;

            const ticket = {
                _type: 'ticket',
                name: formData.name.value,
                email: formData.email.value,
                phone: formData.phone.value,
                kind: parseInt(formData.amount.value) <= 5000 ? "REGULAR" : "VIP",
            };

            client.create(ticket)
                .then(() => {
                    reactAlert.show("Ticket purchase successful!", {
                        type: types.SUCCESS,
                        transition: transitions.FADE,
                    });
                    navigate(`/payment-success?id=${data.orderID}&type=${ticket.kind}`, {
                        state: {
                            id: data.orderID,
                            kind: ticket.kind,
                        },
                    });
                });
        } catch (error) {
            reactAlert.show("Some error occurred!", {
                type: types.ERROR,
                transition: transitions.FADE,
            });
        }
    }

    const paymentParameters = {
    merchantCode: import.meta.env. VITE_INTERSWITCH_MERCHANT_CODE,
    payItemID: import.meta.env. VITE_PAY_ITEM_ID,
    customerEmail: email.value,
    redirectURL: 'https://www.christmasinportharcourtng.com/payment-success',
    text: 'Pay Now',
    mode: 'TEST',
    transactionReference: Date.now().toString(),
    amount: amount.value,
    style: {
        width: '200px',
        height: '40px',
        border: 'none',
        color: '#fff',
        backgroundColor: '#ff0000'
    },
    customerName: name.value,
    customerMobileNo: phone.value,
    callback: (response) => {
      console.log('response: ', response)
    }
  }

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div>
            <NavbarLight />
            <section className="position-relative vh-100 pt-5 pb-4">
                <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                    <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: '526px' }}>
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: [0, 0.4, 1] }} className="text-center text-xl-start">Buy your Ticket</motion.h1>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="name" className="form-label fs-base">Full name</label>
                                        <input type="text" id="name" value={name.value} onChange={handleInputChange} name="name" onBlur={handleBlur} className="form-control form-control-lg" required />
                                        {(formData.name.touched && formData.name.error) && <div className="my-1 text-sm w-100 pl-1 invalid-feedback position-absolute start-0 top-100">Name must have at least 3 characters.</div>}
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="email" className="form-label fs-base">Email</label>
                                        <input type="email" id="email" value={email.value} onChange={handleInputChange} onBlur={handleBlur} name="email" className="form-control form-control-lg" required />
                                        {(formData.email.touched && formData.email.error) && <div className="my-1 text-sm w-100 pl-1 invalid-feedback position-absolute start-0 top-100">Email must be a valid email!</div>}
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="phone" className="form-label fs-base">Phone</label>
                                        <input type="tel" id="phone" name="phone" value={phone.value} onChange={handleInputChange} onBlur={handleBlur} className="form-control form-control-lg" required />
                                        {(formData.phone.touched && !validators.phone(formData.phone.value)) && <div className="my-1 text-sm w-100 pl-1 invalid-feedback position-absolute start-0 top-100">
                                            Phone Number must be valid!
                                        </div>}
                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="amount" className="form-label fs-base">Select ticket type</label>
                                        <select id="amount" defaultValue={amount.value} onChange={handleInputChange} name="amount" className="form-select form-select-lg" required>
                                            <option value='0' disabled>Choose ticket category</option>
                                            <option value={3000}>Regular (₦3,000)</option>
                                            <option value={10000}>VIP (₦10,000)</option>
                                        </select>
                                    </div>
                                </motion.div>
                            </div>
                        </form>
                        <InterswitchPay paymentParameters={paymentParameters} className="btn p-0 w-100 mt-2" disabled={Object.values(formData).some((el) => el.error === true)} />
                    </div>
                    <div className="w-100 align-self-end">
                        <span className="opacity-80">&copy; {(new Date().getFullYear())} CIPH. All rights reserved. Built by <a href="https://www.webify.com.ng" target="_blank" rel="noopener noreferrer">Webify</a></span>
                    </div>
                </div>
                {/* Background */}
                <div className="position-fixed top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/closedbg.jpg)' }} />
            </section>
        </div>
    );
}
