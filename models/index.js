const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "irma"
  }
});

const bookshelf = require("bookshelf")(knex);

/*Photo*/
const Photo = require("./Photo")(bookshelf);

/*Album*/
const Album = require("./Album")(bookshelf);

/*User*/
const User = require("./User")(bookshelf);

module.exports = {
  bookshelf,
  Photo,
  Album,
  User
};
