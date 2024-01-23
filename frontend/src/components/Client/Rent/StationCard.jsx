import './StationCard.scss';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import stationimg from '../../../assets/img/station1.jpg'; 
export default function StationCard ({ station }) {
    // console.log(station.id.img);
    const navigate = useNavigate();

    const redirects = {
        details: (id) => navigate('/stations/' + id),
    }

    return (
        <section id="service" className="services pt-0">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="card">
                            <div className="card-img" onClick={() => redirects.details(station.id)}>
                                    {/* <img src="/stations/img/station1.jpg"/>  */}
                                    <img src={stationimg} />
                            </div>
                            <div className="card_title">
                                <p>{station.direction}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}