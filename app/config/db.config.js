module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'node-js-jwt-auth',
  dialect: 'mysql',
  pool: {
    // Maximum number of connection in pool
    max: 5,
    // Minimum number of connection in pool
    min: 0,
    // Maximum time, in milliseconds, that pool will try to get connection before throwing error
    acquire: 30000,
    // Maximum time, in milliseconds, that a connection can be idle before being released
    idle: 10000
  }
}
