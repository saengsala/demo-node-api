module.exports = {
    development: {
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        dialect: process.env.DATABASE_CONNECTION,
        logging: process.env.DATABASE_LOGGING === 'true',
        timezone: '+00:00',
    }
};
