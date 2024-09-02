import express from 'express'
import cors from 'cors'
import conectarBD from "../config/db.js";
import { PORT } from "../config/config.js";
import citasRoutes from "../routes/citasRoutes.js";
import formulasRoutes from "../routes/formulasRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
console.log('host ',process.env.DB_HOST);

try {
    await conectarBD.authenticate();
    console.log('Conexion con exito');
    
} catch (error) {
    console.error('Error ',error);
}

app.get('/',(req,res)=>{
    res.send('hola desde el nav')
});
app.use('/api/citas',citasRoutes)
app.use('/api/formulas',formulasRoutes)

app.listen(PORT,()=>console.log(`hola desde el sv puerto ${PORT}`))



/*
conectarBD();
app.use(cors());
app.use(express.json());

app.use('/api/clientes',require('../routes/clientesRutas'))
app.use('/api/productos',require('../routes/productosRutas'))

app.get('/',(req,res)=>{
    res.send('hola desde el nav')
});
*/
