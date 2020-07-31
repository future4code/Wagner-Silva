import { BaseDatabase } from './BaseDatabase';

export class User extends BaseDatabase {
    constructor() {
        super();
    }
    public async createUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection().insert({
            id,
            email,
            password,
        }).into("UserAuthentication");
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection().select('*').from('UserAuthentication').where({ email });
        return result[0];
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection().select('*').from('UserAuthentication').where({ id });

        return result[0];
    }

    public async deleteUser(id: string): Promise<void> {
        await this.getConnection().delete().from('UserAuthentication').where({ id });
    }
}