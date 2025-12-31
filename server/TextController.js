import TextService from "./TextService.js";

class TextController {
    async getComments (req, res) {
        try {
            const comments = await TextService.getComments();
            res.json(comments);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async getAdvantages (req, res) {
        try {
            const advantages = await TextService.getAdvantages();
            res.json(advantages);
        } catch (e) {
            res.status(500).json(e);
        };
    };
};

export default new TextController;