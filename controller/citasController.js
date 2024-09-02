import Citas from '../models/Citas.js';

export const mostrarCitas = async (req,res) => {
    try {
        let citas;
        citas = await Citas.findAll();
        console.trace('s');
        let t = new Array()
        t= JSON.parse(JSON.stringify(citas))
        console.log(typeof(t));
        
        console.table(t)
        res.status(200).json(citas);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const agregarCitas = async (req,res) => {
    try {
        let citas;
        citas = await Citas.create(req.body);
        res.status(200).json(citas);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const buscarCitas = async (req,res) => {
    try {
        let citas;
        citas = await Citas.findByPk(req.params.id);
        if(!citas){
            res.status(404).send({msg:"no esta"})
        }else{
            res.json(citas);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const editarCitas = async (req,res) => {
    try {
        let citas;
        citas = await Citas.findByPk(req.params.id);
        citas = await citas.update(req.body)
        citas = await Citas.findByPk(req.params.id);
        res.status(200).json(citas);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const modificarFechaCitas = async (req,res) => {
    try {
        let citas;
        citas = await Citas.findByPk(req.params.id);
        
        citas.fecha = req.body.fecha
        citas.update();
        citas.save();
        res.status(200).json(citas);
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}
export const borarCitas = async (req,res) => {
    try {
        let citas;
        citas = await Citas.findByPk(req.params.id);
        
        if(!citas){
            
            res.status(404).send({msg:"no esta"})
        }else{ 
            await citas.destroy();
            citas = await Citas.findByPk(req.params.id); 
            if(!citas){
                res.status(200).send({msg:"borrado"})
                
            }else{

                res.status(200).json(citas);
            }
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(`error `)
    }
}