import { Sequelize } from 'sequelize'
import { POOL } from "./config.js";

const conectarBD = new Sequelize(
    POOL.dbname,
    POOL.user,
    POOL.pass,
    {host:POOL.host,dialect:'mysql'}
)

/*new Sequelize(
    'db name',
    'user',
    'pass',
    {host:'db4free.net',dialect:'mysql'}
)*/
export default conectarBD
