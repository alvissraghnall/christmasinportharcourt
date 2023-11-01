import Ticket from '../components/AdmitOneTicket';

function PaymentSuccess() {
  return (
    <div style={{
        height: "100vh",
        fontFamily: "'Staatliches', cursive",
        background: "#d83565",
        color: "black",
        fontSize: "14px",
        letterSpacing: "0.1em",
        display: "grid"
    }}>
      <Ticket />
    </div>
  );
}

export default PaymentSuccess;
