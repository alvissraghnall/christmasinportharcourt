import { BrowserRouter, Navigate, Outlet, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomeComing from './gallery/HomeComing'
import MaidenEdition from './gallery/MaidenEdition'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ArtisteRegistration from './pages/ArtisteRegistration';
import Ticket from './pages/Ticket'
import Merch from './pages/Merch';
import TicketClosed from './pages/TicketClosed'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route exact path='/merch' element={<Merch />} />
              <Route path='/gallery-v1' element={<MaidenEdition />} />
              <Route path='/gallery-v2' element={<HomeComing />} />

            </Route>
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/artiste-registration' element={<ArtisteRegistration />} />
            <Route path="/closed" element={<TicketClosed />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
