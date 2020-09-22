const { Sequelize } = require("sequelize");
/**
 * Creamos una instancia de Sequalize
 * En este caso se realizará una conexión a una base de datos en memoria SQlite
 */
const sequelize = new Sequelize("database", "", "", {
  dialect: "sqlite",
  storage: "./database/database.sqlite",
});

/**
 * Verifica la conexión a la db
 */
sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully!");
});

module.exports = sequelize;
