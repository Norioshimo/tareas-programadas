import mongoose from "mongoose";

const tareasSchema = new mongoose.Schema({
    responsable: String,
    descripcion: String,
    prioridad: Number
});

const Tareas = mongoose.model('tareas', tareasSchema);

export default Tareas;
