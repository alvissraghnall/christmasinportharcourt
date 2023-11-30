
import { InterswitchPay } from 'react-interswitch'

const App = ({ paymentParameters, className, }) => {
  
  return <InterswitchPay {...paymentParameters} className={className} />
}

export default App;
