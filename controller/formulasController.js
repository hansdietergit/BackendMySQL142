import Formula from '../models/Formulas.js';

export const mostrarFormula = async (req,res) => {
    try {
        let formula;
        formula = await Formula.findAll();

        let t = JSON.parse(JSON.stringify(formula))
        console.table(t)
        res.status(200).json(formula);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const agregarFormula = async (req,res) => {
    try {
        let formula;
        formula = await Formula.create(req.body);
        res.status(200).json(formula);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const buscarFormula = async (req,res) => {
    try {
        let formula;
        formula = await Formula.findByPk(req.params.id);
        if(!formula){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(formula);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const editarFormula = async (req,res) => {
    try {
        let formula;
        formula = await Formula.findByPk(req.params.id);
        formula = await formula.update(req.body)
        formula = await Formula.findByPk(req.params.id);
        res.status(200).json(formula);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const modificarObservacionesFormula = async (req,res) => {
    try {
        let formula;
        formula = await Formula.findByPk(req.params.id);
        
        formula.observaciones = req.body.observaciones
        formula.update();
        formula.save();
        res.status(200).json(formula);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const borarFormula = async (req,res) => {
    try {
        let formula;
        formula = await Formula.findByPk(req.params.id);
        
        if(!formula){
            
            res.status(404).send({msg:"no esta"})
        }else{ 
            await formula.destroy();
            formula = await Formula.findByPk(req.params.id); 
            if(!formula){
                res.status(200).send({msg:"borrado"})
            }else{
                res.status(200).json(formula);
            }
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}