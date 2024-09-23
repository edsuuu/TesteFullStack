import { Request, Response, NextFunction } from 'express';

class ProductValidator {
    validacaoDeIDnoParametro(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ status: 400, errors: 'Id não informado' });
        }

        next();
    }
}

export default new ProductValidator();
