import knex from '../database/config';

const TaskController = {
    index: async (request: any, response: any): Promise<void> => {
        try {
            const tasks: any = await knex('Task').select('*');

            return response.json(tasks);
        } catch {
            return response.status(400).json({ success: false });
        }
    },

    show: async (request: any, response: any): Promise<void> => {
        try {
            const { task_id } = request.params;

            const task = knex('Task').select('*').where('id', task_id);

            return response.json(task);
        } catch {
            return response.status(400).json({ success: false });
        }
    },

    store: async (request: any, response: any): Promise<void> => {
        try {
            const { title, description, limit_date, creator_user_id } = request.body;

            const task = await knex('Task').insert({
                id: Date.now(),
                title,
                description,
                limit_date,
                status: "to do",
                creator_user_id
            });

            return response.json({ success: true });
        } catch {
            return response.json({ success: false });
        }
    },

    destroy: async (request: any, response: any): Promise<void>  => {
        try {
            const { task_id } = request.params;

            const task = await knex('Task').delete().where('id', task_id);
            return response.json({ success: true });
        } catch {
            return response.status(400).json({ success: false });
        }
    }

}

export default TaskController;