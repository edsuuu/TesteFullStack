import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import Auth from '../model/Auth';
class AuthController {
    constructor() {}

    async login(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        const authInstance = new Auth();

        const emailExists: boolean = await authInstance.autenticarUsuario(email);

        function generateToken(email: string): string | null {
            if (emailExists) {
                const token = jwt.sign({ email }, process.env.TOKEN_SECRET as string, {
                    expiresIn: process.env.TOKEN_EXPIRATION,
                });
                return token;
            } else {
                return null;
            }
        }

        try {
            const token: string | null = generateToken(email);

            if (token === null) {
                return res.status(401).json({ errors: 'Sem autorização' });
            }

            console.log(token);

            return res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ errors: 'Erro interno do servidor' });
        }
    }
}

export default new AuthController();
