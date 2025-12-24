import ApiaryService from "./ApiaryService.js";

class ApiaryController {
    async getAll (req, res) {
        try {
            const apiarys = await ApiaryService.getAll();
            return apiarys;
        } catch (e) {
            res.status(500).json(e);
        };
    };
};

export default new ApiaryController;