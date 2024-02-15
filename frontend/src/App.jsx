import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
// librerias para la plantilla
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
// import './assets/vendor/aos/aos.css';

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
import { BiciContextProvider } from './context/BiciContext';
// rutas de la aplicacion
const Home = React.lazy(() => import("./pages/Home/Home"));
const Rent = React.lazy(() => import( "./pages/Rent/Rent"));
const Dashboard = React.lazy(() => import( "./pages/Admin/Dashboard"));


const StationsList = React.lazy(() => import('./pages/Admin/Station/StationsList'));
const StationsAdd = React.lazy(() => import('./pages/Admin/Station/StationsAdd'));
const StationsUpdate = React.lazy(() => import('./pages/Admin/Station/StationsUpdate'));
const StationDetails = React.lazy(() => import('./pages/Client/StationDetails'));

const BiciList = React.lazy(() => import('./pages/Admin/Bici/BiciList'));
const BiciAdd = React.lazy(() => import('./pages/Admin/Bici/BiciAdd'));
const BiciUpdate = React.lazy(() => import('./pages/Admin/Bici/BiciUpdate'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<SpinnerLoading/>}> 
        <BrowserRouter>
          <StationContextProvider>
            <BiciContextProvider>
            <SlotContextProvider>
              <Header/>
                <Routes>
                  <Route path="/" element={<Rent/>} />
                  <Route path="/home" element={<Home/>} />
                  <Route path="/rent" element={<Rent/>} /> 
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/stations/:slug" element={<StationDetails/>}/>
                  <Route path="/dashboard/stations" element={<StationsList/>}/>
                  <Route path="/dashboard/bici" element={<BiciList/>}/>
                </Routes>
              <Footer/> 
              </SlotContextProvider>
              </BiciContextProvider>
          </StationContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;