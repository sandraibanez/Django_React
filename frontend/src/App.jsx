import React, { Suspense } from 'react';
import {Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);






import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';


const Home = React.lazy(() => import("./pages/Home/Home"));
const Rent = React.lazy(() => import( "./pages/Rent/Rent"));

// librerias para la plantilla
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/aos/aos.css';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Rent/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/rent" element={<Rent/>} /> 
        </Routes>
      <Footer/> 
    </div>
  );
}

export default App;