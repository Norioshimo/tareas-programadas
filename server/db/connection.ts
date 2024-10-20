
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Conectar a MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tu-base-de-datos';


const connectDB = async () => {
    try {

        await mongoose.connect(mongoURI)
            .then(async () => {
                console.log('Conexión a MongoDB exitosa')
            })
            .catch((error) => console.error('Error conectando a MongoDB:', error));

    } catch (error) {
        console.error(`Error conection database: ${error}`);
        process.exit(1);
    }

}


export default connectDB;
