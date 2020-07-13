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
        const user = await knex.select('*').from('UserAuthentication').where({ email });
        return user[0];
    }
}