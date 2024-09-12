import express, { Express } from 'express';
import { produtosRoute } from './routes/produtosRoute';
import dotenv from 'dotenv';
import { authRoute } from './routes/authRoute';
import cors from 'cors';
// import helmet from 'helmet';

dotenv.config();

const whitelist = ['http://localhost:3000', 'http://127.0.0.1:5173', 'http://localhost:5173'];

const corsOptions: cors.CorsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin as string) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        // this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/produtos', produtosRoute);
        this.app.use('/login', authRoute);
    }
}

export default new App().app;
