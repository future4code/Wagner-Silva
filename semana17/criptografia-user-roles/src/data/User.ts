import knex from '../database/config';

export class User {
    public async createUser(id: string, email: string, password: string): Promise<void> {
        await knex.insert({
            id,
            email,
            password,
        }).into("UserAuthentication");
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await knex.select('*').from('UserAuthentication').where({ email });
        return result[0];
    }

    public async getUserById(id: string): Promise<any> {
        const result = await knex.select('*').from('UserAuthentication').where({ id });

        return result[0];
    }

    public async deleteUser(id: string): Promise<void> {
        await knex.delete().from('UserAuthentication').where({ id });
    }
}