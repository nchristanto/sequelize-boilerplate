module.exports = {
  development: {
    dialect: "mysql",
    username: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME, 
    host: process.env.DB_HOSTNAME

  }
}