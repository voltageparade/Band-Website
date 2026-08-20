import './App.css'
import Footer from './elements/Footer';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { Header } from './elements/Header';

function App() {
  return (
    <>
    <Header/>
    <div className='website-viewpoint'>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
