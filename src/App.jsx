import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomeComing from './gallery/HomeComing'
import MaidenEdition from './gallery/MaidenEdition'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Ticket from './pages/Ticket'
import TicketClosed from './pages/TicketClosed'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallery-v1' element={<MaidenEdition />} />
            <Route path='/gallery-v2' element={<HomeComing />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path="/closed" element={<TicketClosed />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
