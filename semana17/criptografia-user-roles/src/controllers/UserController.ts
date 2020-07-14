import { Request, Response } from 'express';
import { Authenticator } from '../service/Authenticator';
import { HashManager } from '../service/HashManager';
import { IdGenerator } from '../service/IdGenerator';
import { User } from '../data/User';

export const UserController = {
    login: async (request: Request, response: Response): Promise<Response> => {
        const { email, password } = request.body;
        const userDb: User = new User();
        try {
            const user = await userDb.getUserByEmail(email);
            const hashManager: HashManager = new HashManager();
    
            if(! await hashManager.compare(password, user.password)) {
                return response.json({ error: "Senha incorreta" });
            }

            const authenticator: Authenticator = new Authenticator();
            const token: string = authenticator.generateToken({
                id: user.id,
                role: user.role
            });

            return response.json({ token });
        } catch {
            return response.json({ success: false });
        }
    },

    profile: async (request: Request, response: Response): Promise<Response> => {
        const token: string = request.headers.token as string;
        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userDb: User = new User();
        
        try {
            const user = await userDb.getUserById(authenticationData.id);

            if(user.role !== "normal") return response.status(401).json({ error: "Não autorizado" });

            return response.json({ id: user.id, email: user.email });
        } catch {
            return response.json({ success: false });
        }
    },

    show: async (request: Request, response: Response): Promise<Response> => {
        const token: string = request.headers.token as string;
        const { id } = request.params;
        
        try {
            const authenticator = new Authenticator();
            authenticator.getData(token);
            const userDb: User = new User();
            const user = await userDb.getUserById(id);

            return response.json({ id: user.id, email: user.email });
        } catch {
            return response.json({ success: false });
        }
    },

    store: async (request: Request, response: Response): Promise<Response> => {
        const { email, password, role } = request.body;

        if(email.length === 0 || email.indexOf('@') === -1) {
            return response.json({ error: "Email inválido: o email não pode ser vazio e deve conter um @" });
        }
        
        if(password.length < 6) {
            return response.json({ error: "Senha inválida: a senha deve conter pelo menos 6 caracteres"});
        }

        const idGenerator: IdGenerator = new IdGenerator();
        const hashManager: HashManager = new HashManager();
        const id: string = idGenerator.generate();

        const userDb: User = new User();

        try {
            const authenticator = new Authenticator();
            const token = authenticator.generateToken({ id, role });

            const hashPassword: string = await hashManager.hash(password);

            userDb.createUser(id, email, hashPassword);

            return response.json({ token });
        } catch {
            return response.json({ success: false });        }
    },

    destroy: async (request: Request, response: Response): Promise<Response> => {
        const { id } = request.params;
        const token: string = request.headers.token as string;
        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);
        const userDb = new User(); 

        if(authenticationData.role !== 'admin') return response.status(401).json({ error: "Não autorizado" });

        try {
            await userDb.deleteUser(id);
            return response.json({ success: true });
        } catch {
            return response.json({ success: false });
        }
    }
}