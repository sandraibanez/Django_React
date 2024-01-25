import React from 'react';
import SlotCard from './SlotCard';
// import StationMap from '../Map/StationMap';

export default function SlotsList ({ station, slots }) {
console.log({station,slots});
    return  (
        
        <div className="slots_container">
            <div id="hero" class="hero d-flex align-items-center">
                <div class="container">
                    <div class="row gy-4 d-flex justify-content-between">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <div className="title">
                                <h1>Rent a Bici</h1>
                                <h3>{station.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='leyenda'>
                <div className='slot_verde'>
                    <div className="cuadrado_verde"></div>
                    <p className='texto_verde'>Slot with a bici ready to rent</p>
                </div>
                <div className='slot_rojo'>
                    <div className="cuadrado_rojo"></div>
                    <p className='texto_rojo'>Slot where you can bring back the bici</p>
                </div>
                <div className='slot_amarillo'>
                    <div className="cuadrado_amarillo"></div>
                    <p className='texto_amarillo'>Slot in maintenance</p>
                </div>
            </div>
            <div className="slots_cards-list">
                {
                    slots.map(( slots, index ) => (
                        <SlotCard key={index} slot={slots}/>
                    ))
                }
            </div>
            {/* <div className="station_map">
                <StationMap station={station}/>
            </div> */}
            
        </div>
                
    )
}