import Text from "./Text.js";

class TextService {
    async getComments() {
        const comments = await Text.find({type: "comment"});
        return comments;
    };

    async getAdvantages() {
        const advantages = await Text.find({type: "advantage"});
        return advantages;
    };
};

export default new TextService;