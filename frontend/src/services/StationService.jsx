import api from "./api"

const StationService = {

    getAllStations() {
        return api().get("stations/");
    },

    getOneStation(slug) {
        console.log(slug);
        return api().get(`stations/${slug}`);
    }
    
};
export default StationService;