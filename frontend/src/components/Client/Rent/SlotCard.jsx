import './SlotCard.scss';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slotimg from '../../../assets/img/Bici.jpg';

export default function SlotCard ({ slot }) {
  
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [openModalRent, setOpenModalRent] = useState(false);
    const [modalSlot, setModalSlot] = useState(null);

    const incidence_type = 'slot';

    const img_background = slot.status === 'in_use' ? '#27EE27' : slot.status === 'vacant' ? '#FF1818' : '#FFFF37';
    const slot_status = slot.status === 'in_use' ? 'Bici available' : slot.status === 'vacant' ? 'Vacant' : 'Maintenance';

    const rent_bici = (slot) => {
            if (slot.status == 'in_use') {
                
                setOpenModalRent(true);
                setModalSlot(slot);
            } else {
                
                setModalSlot(slot);
            }
        
    }

  

    const report = slot_id => {
        setOpenModal(true);
        setModalSlot(slot_id);
    }

    return (
      
        <div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="slot">
                    <div className="card" onClick={() => { rent_bici(slot) }}>
                        <div className="card_image">
                            <img src={slotimg} style={{ backgroundColor: `${img_background}` }}/> 
                        </div>
                        <div className="card_title">
                            <p>slot: {slot.slot_number}</p>
                            <p>{slot_status}</p>
                        </div>
                    </div>
                    <div className="report">
                        <p className="report_button" onClick={() => report(slot.id)}>
                            <FontAwesomeIcon className='icon' icon="fa-solid fa-circle-exclamation"/>
                            Report an incidence
                        </p>
                    </div>
               </div>
            </div>
        </div>
    )
}