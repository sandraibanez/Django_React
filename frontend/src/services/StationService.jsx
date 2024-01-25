import api from "./api"

const StationService = {

    getAllStations() {
        return api().get("/stations");
    },

    getOneStation(slug) {
        console.log(slug);
        return api().get(`stations/${slug}`);
    },

    createStation(data) {
        console.log( data );
        return api().post("/stations/", { 'station': data });
    },

    updateStation(slug, data) {
        return api().put(`stations/${slug}`, { 'station': data });
    },

    deleteStation(slug) {
        return api().delete(`stations/${slug}`);
    },
    
};
export default StationService;