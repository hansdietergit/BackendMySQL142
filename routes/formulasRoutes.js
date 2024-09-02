import express from 'express';
import { agregarFormula, mostrarFormula, buscarFormula, modificarObservacionesFormula, editarFormula, borarFormula } from '../controller/formulasController.js';

const router = express.Router();

router.post('/', agregarFormula);
router.get('/', mostrarFormula);
router.get('/:id', buscarFormula);
router.put('/:id', editarFormula);
router.patch('/observaciones/:id', modificarObservacionesFormula);
router.delete('/:id', borarFormula);

export default router;