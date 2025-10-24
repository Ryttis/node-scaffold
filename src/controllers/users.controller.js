import { UsersService } from '../services/users.service.js';
import { success, error } from '../utils/response.js';

export const UsersController = {
    async register(req, res) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return error(res, 'Missing username or password', 400);
            }

            const user = await UsersService.create({ username, password });
            success(res, user, 201);
        } catch (err) {
            console.error('🔥 UsersController.register error:', err);
            error(res, err.message);
        }
    },
};
