import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    statusCode: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENT_REQUIRED: 402,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOTALLOWED: 405,
        SERVER_ERROR: 500,
    }
}

export default config;
