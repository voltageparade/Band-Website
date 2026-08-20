import './App.css'
import Footer from './elements/Footer';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './elements/Header';

function App() {
  return (
    <>
    <Header/>
    <div className='website-viewpoint'>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
    </>
  )
}

export default App
