import { Request, Response } from 'express';
import Tareas from '../models/tareas';


export const postTarea = async (req: Request, res: Response) => {

    const { descripcion, responsable = 'Desconocido' ,prioridad=0} = req.body;

    try {

        if (descripcion == undefined) {
            res.status(404).json({
                msg: 'Descripcion es campo requerido.'
            })
            return;
        }

        const tareaNew = await Tareas.create({ descripcion ,responsable,prioridad});
        res.json(tareaNew);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const getTareas = async (req: Request, res: Response) => {

    const tareas = await Tareas.find();

    res.json({ tareas });
}



export const deleteTarea = async (req: Request, res: Response) => {

    const { id } = req.query;

    const tarea = await Tareas.findById(id);
    if (!tarea) {
        return res.status(404).json({
            msg: 'No existe un tarea con el id ' + id
        });
    }

    const tareaDeleted = await Tareas.deleteOne();

    res.json({ "cantidadEliminado": tareaDeleted.deletedCount });
}
