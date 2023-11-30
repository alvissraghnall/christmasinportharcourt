import Ticket from '../components/AdmitOneTicket';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { positions, transitions, types, useAlert } from 'react-alert';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

function PaymentSuccess() {
  const reactAlert = useAlert();
  let [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const verifyPayment = () => {
    return fetch(`${import.meta.env.VITE_URL}/api/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merchantCode: import.meta.env.VITE_INTERSWITCH_MERCHANT_CODE,
        transactionReference: ref,
        amount: parseInt(amount) * 100
      })
    })
      .then((response) => response.json());
  }

  const query = useQuery();

  const ref = query.get("ref");
  const amount = query.get("amount");

  useEffect(() => {
    const paymentVerification = verifyPayment().then(
      res => {
        console.log(res);
        if (res["success"] !== true) {
          reactAlert.show("Invalid ticket!", {
            onClose: () => {
              navigate("/ticket");
            }
          });
        }
        else {
          setValid(true);
        }
      }
    );
    
  }, []);

  return (
    valid && (<div style={{
      minHeight: "100svh",
      fontFamily: "'Staatliches', cursive",
      background: "#d83565",
      color: "black",
      fontSize: "14px",
      letterSpacing: "0.1em",
      display: "grid"
    }}>
      <Ticket id={query.get('id')} kind={query.get('kind')} />
    </div>)
  );
}

export default PaymentSuccess;
