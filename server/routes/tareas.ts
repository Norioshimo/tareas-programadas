
import { Router } from 'express';
import { deleteTarea, getTareas, postTarea } from '../controller/tareas';

const router = Router();

router.post('/', postTarea);
router.get('/', getTareas);
router.delete('/', deleteTarea);



export default router;