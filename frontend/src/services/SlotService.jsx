import api from "./api"

const SlotService = {

    getAllSlots(station = null) {
        return api().get("/slot", { params: station });
    }

};

export default SlotService;