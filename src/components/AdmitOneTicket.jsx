import React from 'react';
import styles from './styles/AdmitOneTicket.module.css';
import QRCode from "react-qr-code";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Ticket = ({ id: ticketID, kind }) => {
  return ( ticketID && kind ?
    <div className={styles.ticket}>
      <div className={styles.left}>
        <div className={styles.image}>
          <p className={styles.admitOne}>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div className={styles.ticketNumber}>
            <p>#{ticketID ?? 1111}</p>
          </div>
        </div>
        <div className={styles.ticketInfo}>
          <p className={styles.date}>
            <span class="d-none d-md-block">24TH - 26TH </span>
            <span class="d-block d-md-none">24-26 </span>
            <span className={styles.june29}>DECEMBER </span>
            <span>2023</span>
          </p>
          <div className={styles.showName}>
            <h1>Christmas in Port Harcourt</h1>
            <h2>Valid for 3 days</h2>
          </div>
          <div className={styles.time}>
            <p>8:00 AM <span>TO</span> 11:00 PM</p>
            {/* <p>DOORS <span>@</span> 7:00 PM</p> */}
          </div>
          <p className={styles.location}>
            <span>Port Harcourt Polo Club</span>
            <span className={styles.separator}><i className="far fa-smile"></i></span>
            <span>Port Harcourt City, Rivers State</span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.admitOne}>
          <span>ADMIT ONE</span>
          <span>ADMIT ONE</span>
          <span>ADMIT ONE</span>
        </p>
        <div className={styles.rightInfoContainer}>
          <div className={styles.showName}>
            <h1>{kind ?? "REGULAR"}</h1>
          </div>
          <div className={styles.time}>
            <p>8:00 AM <span>TO</span> 11:00 PM</p>
            {/* <p>DOORS <span>@</span> 7:00 PM</p> */}
          </div>
          <div className={styles.barcode}>
            {/* <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" /> */}
            <QRCode value={ticketID ?? 1111}  />
          </div>
          <p className={styles.ticketNumber}>
            #{ticketID ?? 1111}
          </p>
        </div>
      </div>
    </div>

    : <div className='py-4 px-4 text-center' style={{
      width: "100%"
    }}>
      <Navbar />
      <h1 style={{
        fontSize: "5rem",
        lineHeight: 1,
        color: "white",
        marginTop: "7.5rem",
        marginBottom: "1rem",
        textAlign: "center",
        paddingLeft: "2rem",
        paddingBottom: "1.4rem"
      }}>This is not a valid ticket!</h1>

      <button className='btn btn-secondary btn-instagram mx-2 px-3 text-center' style={{
        textTransform: "capitalize", 
        marginBottom: "2.5rem",
      }}>Buy a ticket</button>

      <Footer />
    </div>
  );
};

export default Ticket;
