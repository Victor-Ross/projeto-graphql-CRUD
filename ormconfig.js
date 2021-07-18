module.exports = {
  "type": process.env.TYPE,
  "host": process.env.HOST,
  "port": process.env.PORT,
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "synchronize": true,
  "logging": false,
  "entities": ["src/database/entities/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/database/entities"
  }
}
