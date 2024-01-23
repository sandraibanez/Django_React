import React, { Suspense, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';
import SpinnerLoading from './components/SpinnerLoading/SpinnerLoading';

import { StationContextProvider } from './context/StationsContext';
import { SlotContextProvider } from './context/SlotsContext';

const Home = React.lazy(() => import("./pages/Home/Home"));
const Rent = React.lazy(() => import( "./pages/Rent/Rent"));
const StationDetails = React.lazy(() => import('./pages/Client/StationDetails'));
// librerias para la plantilla
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/aos/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading/>}> 
        <BrowserRouter>
          <StationContextProvider>
            {/* <SlotContextProvider> */}
              <Header/>
                <Routes>
                  <Route path="/" element={<Rent/>} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/rent" element={<Rent/>} /> 
                  <Route path="/stations/:id" element={<StationDetails/>}/>
                </Routes>
              <Footer/> 
            {/* </SlotContextProvider> */}
          </StationContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;