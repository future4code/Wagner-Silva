import { Authenticator } from '../service/Authenticator';
import { IdGenerator } from '../service/IdGenerator';
import { User } from '../data/User';

export const UserController = {
    login: async (request: any, response: any): Promise<void> => {
        const { email, password } = request.body;
        const user: User = new User();
        try {
            const userLogin = await user.getUserByEmail(email);
    
            if(password !== userLogin.password) {
                return response.json({ error: "Senha incorreta" });
            }

            const authenticator: Authenticator = new Authenticator();
            const token: string = authenticator.generateToken({ id: userLogin.id });

            return response.json({ token });
        } catch {
            return response.json({ success: false });
        }
    },

    store: async (request: any, response: any): Promise<void> => {
        const { email, password } = request.body;

        if(email.length === 0 || email.indexOf('@') === -1) {
            return response.json({ error: "Email inválido: o email não pode ser vazio e deve conter um @" });
        }
        
        if(password.length < 6) {
            return response.json({ error: "Senha inválida: a senha deve conter pelo menos 6 caracteres"});
        }

        const idGenerator: IdGenerator = new IdGenerator();
        const id: string = idGenerator.generate();

        const user: User = new User();

        try {
            const authenticator = new Authenticator();
            const token = authenticator.generateToken({ id });

            user.createUser(id, email, password);

            return response.json({ token });
        } catch {
            return response.json({ success: false });        }
    }
}