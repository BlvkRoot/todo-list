module.exports = {
  "type": "mongodb",
  "port": process.env.TYPEORM_DATABASE_PORT,
  "url": process.env.TYPEORM_MONGODB_URI,
  "useNewUrlParser": true,
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/database/migrations/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/database/migrations",
    "subscribersDir": "src/subscriber"
  }
};