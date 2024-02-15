//React,
// import  { useState } from 'react';
import './Home.scss';
// import { useStations } from "../../hooks/useStations.jsx";
// import StationsMap from "../../components/Client/Map/StationsMap.jsx";
// // import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading.jsx";
console.log('hola home');
export default function Home() {
   // const {stations} = useStations();
    // const [show, setShow] = useState(null);
    
    return (
        // stations.length === 0 ? <SpinnerLoading />
        // :
        <div className="home_container">
            <div className="title">
                <h1>Stations Map</h1>
            </div>
            {/* <div className='maps'>
              <h1>hola</h1>
                <StationsMap stations={stations} setShow={setShow}/>
            </div> */}
        </div>
        // <h1>hola</h1>
        
        
    )
}