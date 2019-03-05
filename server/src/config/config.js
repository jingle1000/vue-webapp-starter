module.exports = {
    port: process.env.PORT || 5000,
    db: {
        database: process.env.DB_NAME || "dev-db",
        user: process.env.DB_USER || 'devuser',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './dev-dv.sqlite'
        }
    }
}
