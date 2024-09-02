
export const POOL = {
    port: process.env.DB_PORT || 5000,
    host: process.env.DB_HOST || '',
    dbname: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASSWORD || ''
}

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || ''
export const DB_USER = process.env.DB_USER || ''
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_NAME = process.env.DB_NAME || ''
export const DB_PORT = process.env.DB_PORT || 3306