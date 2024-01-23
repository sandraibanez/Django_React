import api from "./api"

const StationService = {

    getAllStations() {
        return api().get("/stations");
    },

    getOneStation(id) {
        console.log(id);
        return api().get(`stations/${id}`);
    },

    createStation(data, slots = 0) {
        return api().post("/stations", { 'stations': data, 'slot': { 'num_slots': slots } });
    },

    updateStation(slug, data) {
        return api().put(`stations/${slug}`, { 'stations': data });
    },

    deleteStation(slug) {
        return api().delete(`station/${slug}`);
    },
    
};
export default StationService;