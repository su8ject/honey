import Apiary from "./Apiary.js";

class ApiaryService {
    async getAll() {
        const apiarys = await Apiary.find();
        return apiarys;
    };
};

export default new ApiaryService;