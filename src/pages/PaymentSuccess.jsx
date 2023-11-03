import Ticket from '../components/AdmitOneTicket';
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search }= useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

function PaymentSuccess() {

  const query = useQuery();
  
  return (
    <div style={{
        minHeight: "100svh",
        fontFamily: "'Staatliches', cursive",
        background: "#d83565",
        color: "black",
        fontSize: "14px",
        letterSpacing: "0.1em",
        display: "grid"
    }}>
      <Ticket id={query.get('id')} kind={query.get('kind')} />
    </div>
  );
}

export default PaymentSuccess;
