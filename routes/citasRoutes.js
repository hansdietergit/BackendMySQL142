import express from 'express';
import { agregarCitas, mostrarCitas, buscarCitas, modificarFechaCitas, editarCitas, borarCitas } from '../controller/citasController.js';

const router = express.Router();

router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id', buscarCitas);
router.put('/:id', editarCitas);
router.patch('/fecha/:id', modificarFechaCitas);
router.delete('/:id', borarCitas);

export default router;