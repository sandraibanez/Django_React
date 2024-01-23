import api from "./api"

const SlotService = {

    getAllSlots(stations = null) {
        return api().get("/slot", { params: stations });
    },

    getOneSlot(id) {
        return api().get(`slot/${id}`);
    },

};

export default SlotService;