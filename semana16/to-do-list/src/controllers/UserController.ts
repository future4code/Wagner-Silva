import knex from '../database/config';

const UserController: any = {
    index: async (request: any, response: any): Promise<void> => {
        try {
            const users: any = await knex('User').select('*');
            
            return response.json(users);
        } catch {
            return response.status(400).json({ error: "Error" });
        }

    },

    show: async (request: any, response: any): Promise<void> => {
        try {
            const { user_id } = request.params;
    
            const [ user ] = await knex('User').select('*').where('id', user_id);
            if(user) return response.json(user);
            else return response.json({ message: "User not found" });
        } catch {
            return response.status(400).json({ error: "Error" });
        }

    },

    store: async (request: any, response: any): Promise<void> => {
        try {
            const { name, nickname, email } = request.body;

            const id = Date.now();

            const user = await knex('User').insert({
                id,
                name,
                nickname,
                email
            });

            return response.json({ success: true });
        } catch {
            return response.status(400).json({ success: false });
        }
    },

    update: async (request: any, response: any): Promise<void> => {
        try {
            const { user_id } = request.params;
            const { name, nickname, email } = request.body;
    
            const user = await knex('User').update({
                name,
                nickname,
                email
            }).where('id', user_id);
    
            return response.json({ success: true });;
        } catch {
            return response.status(400).json({ success: false });;
        }
    },

    destroy: async (request: any, response: any): Promise<void> => {
        try {
            const { user_id } = request.params;

            const user = await knex('User').delete().where('id', user_id);

            return response.json({ success: true });
        } catch {
            return response.status(400).json({ success: false });
        }
    }
}

export default UserController;