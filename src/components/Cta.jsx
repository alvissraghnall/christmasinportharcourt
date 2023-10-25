import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cta() {
  return (
    <AnimatePresence>
      <motion.section
        className="bg-gradient-primary py-5"
        initial={{ opacity: 0 }}
        animate={{ x: [-1000, 0], opacity: [0,1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="container py-2 py-md-4 py-lg-5">
          <motion.div
            className="row py-xl-3"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-xl-4 col-lg-5 offset-xl-1 order-lg-2 mb-4">
              <motion.h2
                className="h1 text-light text-center text-sm-start pb-4 mb-0 mb-lg-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Become a Part of the Biggest Carnival!
              </motion.h2>
              <div className="d-flex align-items-center">
                <motion.div
                  className="bg-white rounded-circle text-primary flex-shrink-0 p-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <svg
                    style={{ margin: '2px' }}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0225 2.91133C17.2397 2.91133 16.5038 3.21602 15.9507 3.76914C15.3132 4.40664 14.9616 5.25508 14.9616 6.15977V8.98633C14.9616 12.516 13.0772 15.6098 10.26 17.3207H14.2585C18.0225 17.3207 21.0882 14.2598 21.0882 10.491V5.97227C21.0882 4.28945 19.71 2.91133 18.0225 2.91133ZM18.7772 5.97695C18.3882 5.97695 18.0741 5.66289 18.0741 5.27383C18.0741 4.88477 18.3882 4.5707 18.7772 4.5707C19.1663 4.5707 19.4804 4.88477 19.4804 5.27383C19.4804 5.66289 19.1663 5.97695 18.7772 5.97695ZM23.7929 1.71133C23.5163 1.43477 23.0710 1.43477 22.7991 1.71133L21.4257 3.08477C20.6054 2.11914 19.3819 1.50977 18.0225 1.50977C16.8647 1.50977 15.7772 1.95977 14.9569 2.78008L0.20535 17.527C0.00378752 17.7285 -0.05715 18.0285 0.0506625 18.291C0.158475 18.5535 0.416288 18.727 0.702225 18.727H5.22097H9.4491L11.8069 21.0848H11.2444C10.8553 21.0848 10.5413 21.3988 10.5413 21.7879C10.5413 22.177 10.8553 22.491 11.2444 22.491H15.7632C16.1522 22.491 16.4663 22.177 16.4663 21.7879C16.4663 21.3988 16.1522 21.0848 15.7632 21.0848H13.7944L11.4366 18.727H14.2585C18.8007 18.727 22.4944 15.0332 22.4944 10.491V5.97227C22.4944 5.39102 22.3819 4.8332 22.1757 4.31758L23.7929 2.70039C24.0694 2.43320 24.0694 1.98789 23.7929 1.71133ZM2.3991 17.3207L13.5554 6.16445V8.98633C13.5554 13.5801 9.81472 17.3207 5.22097 17.3207H2.3991ZM21.0882 10.4957C21.0882 14.2598 18.0272 17.3254 14.2585 17.3254H10.26C13.0772 15.6145 14.9616 12.516 14.9616 8.98633V6.15977C14.9616 5.25508 15.3132 4.40664 15.9507 3.76914C16.5038 3.21602 17.2397 2.91133 18.0225 2.91133C19.71 2.91133 21.0882 4.28477 21.0882 5.97695V10.4957Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
                <motion.p
                  className="fs-xl text-light ps-3 mb-0"
                  whileInView={{opacity: [0,1]}}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  Hurry up! Early birds extended until November 30th, 2023.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="col-xl-6 col-lg-7 order-lg-1"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-3 zindex-5 py-5 px-4 p-sm-5">
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center-start zindex-2"
                    style={{ backgroundImage: 'url(assets/img/price-card-left-bg.png)' }}
                  />
                  <span
                    className="position-absolute top-0 end-0 w-100 h-100 bg-repeat-0 bg-position-center-end zindex-2"
                    style={{ backgroundImage: 'url(assets/img/price-card-right-bg.png)' }}
                  />
                  <motion.div
                    className="px-md-4 position-relative zindex-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="d-sm-flex align-items-start justify-content-between">
                      <div className="text-center text-sm-start me-sm-4">
                        <div className="lead text-primary fw-semibold text-uppercase mb-2">
                          DEC. 24TH - 26TH
                        </div>
                        <motion.h3
                          className="h1 text-heading"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                        >
                          Christmas in Port Harcourt
                        </motion.h3>
                      </div>
                      <motion.div
                        className="d-table bg-white rounded-3 p-4 flex-shrink-0 mx-auto mx-sm-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <img src="assets/img/qr-code.png" width={102} alt="QR Code" />
                      </motion.div>
                    </div>
                    <motion.div
                      className="d-flex flex-column flex-sm-row align-items-center pt-4 mt-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <Link to="/ticket" className="btn btn-primary btn-lg mb-3 mb-sm-0">
                        Buy access pass
                      </Link>
                      <motion.div
                        className="d-flex align-items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <span className="fs-lg me-2">Regular</span>
                        <span className="h4 text-body mb-0">₦3,000</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.span
                  className="position-absolute bg-dark opacity-35 bottom-0 mb-n2 d-dark-mode-none"
                  style={{ left: '1.5rem', width: 'calc(100% - 3rem)', height: '5rem', filter: 'blur(.75rem)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}


// Stage name 
// Demo song to be performed 
// Their socials iD
// TnC of  artist selection