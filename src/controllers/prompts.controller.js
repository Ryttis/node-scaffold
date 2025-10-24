import { PromptsService } from '../services/prompts.service.js';
import { success, error } from '../utils/response.js';

export const PromptsController = {
    async create(req, res) {
        try {
            const { prompt_text, result_text } = req.body;
            const userId = req.user?.id || null;
            const data = await PromptsService.create({ userId, prompt_text, result_text });
            success(res, data, 201);
        } catch (err) {
            error(res, err.message);
        }
    },

    async list(req, res) {
        try {
            const prompts = await PromptsService.list();
            success(res, prompts);
        } catch (err) {
            error(res, err.message);
        }
    }
};
