import React from 'react'

import { InterswitchPay } from 'react-interswitch'

const App = ({ paymentParameters }) => {
  
  return <InterswitchPay {...paymentParameters} />
}

export default App;
