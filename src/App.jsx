import './App.css'
import Footer from './elements/Footer';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './elements/Header'
import { HomePage } from './pages/HomePage'
import { EventsPage } from './pages/EventsPage'
import { ReleasesPage } from './pages/ReleasesPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EventsPage" element={<EventsPage />} />
        <Route path="/ReleasesPage" element={<ReleasesPage />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
