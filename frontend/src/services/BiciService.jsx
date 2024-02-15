import api from "./api"

const BiciService = {

    getAllBici() {
        return api().get("/bici");
    },

    getOneBici(slug) {
        return api().get(`bici/${slug}`);
    }
    
};

export default BiciService;