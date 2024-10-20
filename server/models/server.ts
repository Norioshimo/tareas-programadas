import express, { Application } from 'express';
import cors from 'cors';
import tareasRoutes from '../routes/tareas';
import connectDB from '../db/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        tareas: '/api/tareas'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        console.log("Iniciar base de datos.");
        connectDB();
        console.log('Database online');
    }

    middlewares() {

        // CORS
        console.log("Iniciar cors");
        this.app.use(cors());

        // Lectura del body
        console.log("Iniciar json");
        this.app.use(express.json());

        // Carpeta pública
        console.log("Iniciar public");
        this.app.use(express.static('public'));
    }


    routes() {
        console.log("Iniciar Routes");
        this.app.use(this.apiPaths.tareas, tareasRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;