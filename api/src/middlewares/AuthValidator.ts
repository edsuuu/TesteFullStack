import { Request, Response, NextFunction } from 'express';

class AuthValidator {
    validacaoDeEmail(req: Request, res: Response, next: NextFunction) {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ status: 400, errors: 'Email invalido' });
        }

        next();
    }
}

export default new AuthValidator();
