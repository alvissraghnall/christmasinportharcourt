import React from 'react';
import styles from './styles/AdmitOneTicket.module.css';

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.left}>
        <div className={styles.image}>
          <p className={styles.admitOne}>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div className={styles.ticketNumber}>
            <p>#20030220</p>
          </div>
        </div>
        <div className={styles.ticketInfo}>
          <p className={styles.date}>
            <span>24TH - 26TH </span>
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
            <h1>CIPH</h1>
          </div>
          <div className={styles.time}>
            <p>8:00 AM <span>TO</span> 11:00 PM</p>
            {/* <p>DOORS <span>@</span> 7:00 PM</p> */}
          </div>
          <div className={styles.barcode}>
            <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" />
          </div>
          <p className={styles.ticketNumber}>
            #20030220
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
