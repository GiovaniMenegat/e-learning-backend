require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  }
}
