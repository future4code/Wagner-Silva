import Knex from 'knex';
import knex from '../database/config';

export abstract class BaseDatabase {
    private static connection = knex;

    protected getConnection(): Knex {
        if(BaseDatabase.connection === null) {
            BaseDatabase.connection = knex;
        }

        return BaseDatabase.connection;
    }

    public static async destroyConnection() {
        if(BaseDatabase.connection) {
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
}