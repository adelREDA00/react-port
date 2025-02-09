import './css/require.css'
import './css/main.css'
import Home from './pages/Home'
import Lyout from './Lyout'
import { Route,Routes, useLocation } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './comp/ScrolToTop'

function App() {

  const location = useLocation() 
  return (
    <div >
    <AnimatePresence  mode='wait'  >
      <ScrollToTop/>
    <Routes location= {location} key={location.pathname}>
      <Route path='/' element={<Lyout />}>
      <Route index element={<Home />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/services" element={<Services />}/>
      </Route>
    </Routes>
    </AnimatePresence>
    </div>
  )
}

export default App
