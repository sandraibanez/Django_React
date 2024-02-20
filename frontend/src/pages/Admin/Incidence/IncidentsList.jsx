import React from "react";
import { useIncidents } from "../../../hooks/useIncidents";
import IncidentsListAdmin from "../../../components/Admin/Incidence/IncidentsListAdmin";

const IncidentsList = () => {
    
    const {incidentsSlots,  useDeleteIncidence, incidentsStation, } = useIncidents();

    return (
        <IncidentsListAdmin incidents_slots={incidentsSlots} incidents_station={incidentsStation} deleteIncidence={useDeleteIncidence}/>
    )
}

export default IncidentsList;
