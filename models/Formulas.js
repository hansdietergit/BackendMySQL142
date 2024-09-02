import conectarBD from "../config/db.js";
import { DataTypes } from 'sequelize';

const Formula = conectarBD.define('formulas',{
    farmaco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    observaciones: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Formula